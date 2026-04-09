#!/usr/bin/env python3
"""
Context Monitor — Real-time context window usage monitoring for Claude Code sessions.

Reads JSON from stdin (Claude Code hook format), parses token usage,
and displays a colour-coded progress bar with session stats.
"""

import json
import sys
import time
from datetime import datetime


def get_colour_indicator(percent: float) -> str:
    """Return colour emoji based on context usage percentage."""
    if percent < 50:
        return "🟢"
    elif percent < 75:
        return "🟡"
    elif percent < 90:
        return "🟠"
    elif percent < 95:
        return "🔴"
    else:
        return "🚨"


def create_progress_bar(percent: float, width: int = 20) -> str:
    """Create a text-based progress bar."""
    filled = int(width * percent / 100)
    empty = width - filled
    return f"[{'█' * filled}{'░' * empty}]"


def estimate_cost(input_tokens: int, output_tokens: int = 0) -> str:
    """Estimate cost based on Claude Sonnet pricing (approximate)."""
    # Approximate pricing: $3/MTok input, $15/MTok output
    input_cost = (input_tokens / 1_000_000) * 3.0
    output_cost = (output_tokens / 1_000_000) * 15.0
    total = input_cost + output_cost
    if total < 0.01:
        return f"${total:.4f}"
    return f"${total:.2f}"


def main():
    """Main entry point — reads JSON from stdin and displays context usage."""
    start_time = datetime.now()

    try:
        # Read JSON from stdin
        raw_input = sys.stdin.read()
        if not raw_input.strip():
            return

        data = json.loads(raw_input)

        # Extract usage data
        usage = data.get("usage", {})
        input_tokens = usage.get("input_tokens", 0)
        cache_read = usage.get("cache_read_input_tokens", 0)
        cache_creation = usage.get("cache_creation_input_tokens", 0)
        output_tokens = usage.get("output_tokens", 0)

        # Calculate total context usage
        total_tokens = input_tokens + cache_read + cache_creation
        # Claude's context window is approx 200k tokens
        max_context = 200_000
        percent = min((total_tokens / max_context) * 100, 100) if max_context > 0 else 0

        # Get model name
        model = data.get("model", "unknown")

        # Get working directory
        cwd = data.get("cwd", ".")

        # Calculate duration
        duration = datetime.now() - start_time
        duration_str = f"{duration.total_seconds():.1f}s"

        # Get lines changed (if available)
        lines_changed = data.get("lines_changed", 0)

        # Build display
        indicator = get_colour_indicator(percent)
        bar = create_progress_bar(percent)
        cost = estimate_cost(input_tokens, output_tokens)

        output = (
            f"[{model}] "
            f"📁 {cwd} "
            f"🧠 {indicator} {bar} {percent:.1f}% "
            f"| 💰 {cost} "
            f"⏱ {duration_str} "
            f"📝 {lines_changed}"
        )

        print(output, file=sys.stderr)

    except json.JSONDecodeError:
        # Gracefully handle invalid JSON
        print("⚠️  Context monitor: invalid JSON input", file=sys.stderr)
    except KeyError as e:
        # Gracefully handle missing keys
        print(f"⚠️  Context monitor: missing key {e}", file=sys.stderr)
    except Exception as e:
        # Gracefully handle any other error
        print(f"⚠️  Context monitor: {e}", file=sys.stderr)


if __name__ == "__main__":
    main()
