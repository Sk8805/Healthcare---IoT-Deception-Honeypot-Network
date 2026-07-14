# Step 1: Use a base image (Python example)
FROM python:3.10-slim

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Step 4: Copy application code
COPY . .

# Step 5: Expose application port
EXPOSE 5000

# Step 6: Run the application
CMD ["python", "app.py"]
