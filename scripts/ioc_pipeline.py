import os
import pandas as pd
import matplotlib.pyplot as plt

# -------------------------------
# Step 1: Locate and Load Data
# -------------------------------
# Get the directory where this script is located
base_dir = os.path.dirname(os.path.abspath(__file__))

# Build absolute paths for input and output
csv_path = os.path.join(base_dir, "parsed_exploits.csv")
charts_dir = os.path.join(base_dir, "charts")

# Create charts directory if it doesn't exist
os.makedirs(charts_dir, exist_ok=True)

# Load dataset
df = pd.read_csv(csv_path)
# Expected columns: "command", "technique"

# -------------------------------
# Step 2: Normalize Categories
# -------------------------------
category_map = {
    "sql_inj": "SQL Injection",
    "SQL Injection": "SQL Injection",
    "buffer_overflow": "Buffer Overflow",
    "Buffer Overflow": "Buffer Overflow",
    "priv_esc": "Privilege Escalation",
    "Privilege Escalation": "Privilege Escalation"
}
df['technique'] = df['technique'].map(category_map).fillna("Other")

# -------------------------------
# Step 3: Count Frequency
# -------------------------------
freq = df['technique'].value_counts()

# -------------------------------
# Step 4: Generate Charts
# -------------------------------
# Bar Chart
plt.figure(figsize=(8,6))
freq.plot(kind='bar', color='skyblue', title="Exploit Technique Frequency")
plt.xlabel("Exploit Technique")
plt.ylabel("Count")
plt.tight_layout()
plt.savefig(os.path.join(charts_dir, "exploit_bar.png"))
plt.close()

# Pie Chart
plt.figure(figsize=(6,6))
freq.plot(kind='pie', autopct='%1.1f%%', startangle=90, title="Exploit Technique Distribution")
plt.ylabel("")  # Hide y-label
plt.tight_layout()
plt.savefig(os.path.join(charts_dir, "exploit_pie.png"))
plt.close()

# -------------------------------
# Step 5: Link Commands to Categories
# -------------------------------
def categorize_command(cmd):
    if any(keyword in cmd.upper() for keyword in ["SELECT", "UNION", "DROP"]):
        return "SQL Injection"
    elif any(keyword in cmd.upper() for keyword in ["NOP", "SHELLCODE"]):
        return "Buffer Overflow"
    elif any(keyword in cmd.lower() for keyword in ["sudo", "chmod", "setuid"]):
        return "Privilege Escalation"
    else:
        return "Other"

df['exploit_category'] = df['command'].apply(categorize_command)

# Save updated dataset with categories
output_csv = os.path.join(base_dir, "parsed_exploits_with_categories.csv")
df.to_csv(output_csv, index=False)

print("✅ Charts generated in:", charts_dir)
print("✅ Updated dataset saved as:", output_csv)
