import os
import geoip2.database
import pandas as pd
import plotly.express as px

# Step 1: List of attacker IPs (replace with log extraction later)
attacker_ips = ["8.8.8.8", "1.1.1.1"]

# Step 2: Resolve IPs to lat/lon using full Windows path

db_path = os.path.join(
    "C:\\Users\\sushm\\Healthcare-IoT-Deception-Honeypot-Network",
    "Healthcare-IoT-Deception-Honeypot-Network",
    "GeoLite2-City.mmdb"
)
reader = geoip2.database.Reader(db_path)

locations = []
for ip in attacker_ips:
    try:
        response = reader.city(ip)
        lat = response.location.latitude
        lon = response.location.longitude
        if lat and lon:
            locations.append({
                "ip": ip,
                "lat": lat,
                "lon": lon,
                "city": response.city.name,
                "country": response.country.name
            })
    except Exception as e:
        print(f"Could not resolve {ip}: {e}")

reader.close()

# Step 3: Convert to DataFrame
df = pd.DataFrame(locations)

# Step 4: Plot on world map with hover info
fig = px.scatter_geo(
    df,
    lat="lat",
    lon="lon",
    text="ip",
    hover_name="city",
    color="country",
    projection="natural earth",
    title="Attack Origins by Geolocation"
)

fig.show()
