import re

def extract_commands(log_file):
    commands = []
    current_cmd = []

    with open(log_file, "r") as f:
        for line in f:
            line = line.strip()
            if line.startswith("Executed:"):
                # Start new command
                if current_cmd:
                    commands.append(" ".join(current_cmd))
                    current_cmd = []
                cmd = line.replace("Executed:", "").strip()
                current_cmd.append(cmd)
            elif current_cmd and (line.endswith("\\") or line.startswith(" ")):
                # Continuation line
                current_cmd.append(line.rstrip("\\").strip())
            else:
                # End of command block
                if current_cmd:
                    commands.append(" ".join(current_cmd))
                    current_cmd = []

    # Add last command if pending
    if current_cmd:
        commands.append(" ".join(current_cmd))

    return commands

import sys
import json

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python parser.py <logfile>")
        sys.exit(1)

    log_file = sys.argv[1]
    commands = extract_commands(log_file)

    with open("commands.json", "w") as f:
        json.dump(commands, f, indent=4)

    print(f"✅ Commands extracted from {log_file} and saved to commands.json")

