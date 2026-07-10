import geoip2.database
import pandas as pd
import plotly.express as px

# Step 1: List of attacker IPs (replace with log extraction later)
attacker_ips = ["8.8.8.8", "1.1.1.1"]

# Step 2: Resolve IPs to lat/lon
reader = geoip2.database.Reader('./GeoLite2-City.mmdb')

locations = []
for ip in attacker_ips:
    try:
        response = reader.city(ip)
        lat = response.location.latitude
        lon = response.location.longitude
        if lat and lon:
            locations.append({"ip": ip, "lat": lat, "lon": lon})
    except Exception as e:
        print(f"Could not resolve {ip}: {e}")

reader.close()

# Step 3: Convert to DataFrame
df = pd.DataFrame(locations)

# Step 4: Plot on world map
fig = px.scatter_geo(df, lat="lat", lon="lon", text="ip",
                     projection="natural earth",
                     title="Attack Origins by Geolocation")
fig.show()
