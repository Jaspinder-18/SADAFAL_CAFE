import hashlib
import time
import urllib.request
import urllib.parse
import json
import os

env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '.env')
env_vars = {}
if os.path.exists(env_path):
    with open(env_path, 'r') as f:
        for line in f:
            line = line.strip()
            if '=' in line and not line.startswith('#'):
                k, v = line.split('=', 1)
                env_vars[k.strip()] = v.strip()

cloud_name = env_vars.get("CLOUDINARY_CLOUD_NAME", "mychatend")
api_key = env_vars.get("CLOUDINARY_API_KEY", "734128158233238")
api_secret = env_vars.get("CLOUDINARY_API_SECRET", "AOesnO2ZW89Z5iU7aAQ-NOI53Bs")

images_to_upload = [
    {
        "public_id": "hero_bg",
        "url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85&auto=format&fit=crop",
        "title": "Sadafal Dining Interior"
    },
    {
        "public_id": "about_dining",
        "url": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=85&auto=format&fit=crop",
        "title": "Warm Family Dining"
    },
    {
        "public_id": "showcase_indian",
        "url": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80&auto=format&fit=crop",
        "title": "North Indian Delicacies"
    },
    {
        "public_id": "showcase_chinese",
        "url": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80&auto=format&fit=crop",
        "title": "Chinese & Indo-Chinese"
    },
    {
        "public_id": "showcase_pizza",
        "url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&auto=format&fit=crop",
        "title": "Pizza & Pasta"
    },
    {
        "public_id": "showcase_south_indian",
        "url": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80&auto=format&fit=crop",
        "title": "South Indian Specialties"
    },
    {
        "public_id": "showcase_beverages",
        "url": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80&auto=format&fit=crop",
        "title": "Refreshing Shakes & Lassi"
    },
    {
        "public_id": "showcase_snacks",
        "url": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80&auto=format&fit=crop",
        "title": "Fast Food & Snacks"
    },
    {
        "public_id": "gallery_paneer_tikka",
        "url": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=1000&q=80&auto=format&fit=crop",
        "title": "Tandoori Paneer Tikka"
    },
    {
        "public_id": "gallery_masala_dosa",
        "url": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1000&q=80&auto=format&fit=crop",
        "title": "Crisp Golden Masala Dosa"
    },
    {
        "public_id": "gallery_pizza",
        "url": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000&q=80&auto=format&fit=crop",
        "title": "Special Cheesy Veggie Pizza"
    },
    {
        "public_id": "gallery_dal_makhani",
        "url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1000&q=80&auto=format&fit=crop",
        "title": "Rich Dal Makhani & Naan"
    },
    {
        "public_id": "gallery_lassi_shakes",
        "url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=1000&q=80&auto=format&fit=crop",
        "title": "Special Cold Shakes & Traditional Lassi"
    },
    {
        "public_id": "gallery_chole_bhature",
        "url": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=1000&q=80&auto=format&fit=crop",
        "title": "Fresh Chole Bhature"
    },
    {
        "public_id": "gallery_noodles_rolls",
        "url": "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=1000&q=80&auto=format&fit=crop",
        "title": "Wok-Tossed Hakka Noodles"
    },
    {
        "public_id": "gallery_ambiance",
        "url": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1000&q=80&auto=format&fit=crop",
        "title": "Welcoming Dining Atmosphere"
    },
    {
        "public_id": "gallery_pav_bhaji",
        "url": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1000&q=80&auto=format&fit=crop",
        "title": "Butter Pav Bhaji"
    },
    {
        "public_id": "gallery_burger_sandwich",
        "url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1000&q=80&auto=format&fit=crop",
        "title": "Grilled Special Club Sandwich"
    }
]

def upload_image(item):
    timestamp = str(int(time.time()))
    # Parameters to sign in alphabetical order: folder, public_id, timestamp
    folder = "sadafal_cafe"
    pid = item["public_id"]
    to_sign = f"folder={folder}&public_id={pid}&timestamp={timestamp}{api_secret}"
    signature = hashlib.sha1(to_sign.encode('utf-8')).hexdigest()
    
    post_data = urllib.parse.urlencode({
        "file": item["url"],
        "folder": folder,
        "public_id": pid,
        "timestamp": timestamp,
        "api_key": api_key,
        "signature": signature
    }).encode('utf-8')
    
    upload_url = f"https://api.cloudinary.com/v1_1/{cloud_name}/image/upload"
    req = urllib.request.Request(upload_url, data=post_data)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            secure_url = data.get("secure_url")
            print(f"SUCCESS: {item['public_id']} -> {secure_url}")
            return {
                "key": item["public_id"],
                "title": item["title"],
                "url": secure_url
            }
    except Exception as e:
        print(f"Failed to upload {item['public_id']}: {e}")
        return {
            "key": item["public_id"],
            "title": item["title"],
            "url": item["url"]
        }

if __name__ == "__main__":
    print(f"Uploading {len(images_to_upload)} images to Cloudinary (cloud: {cloud_name})...")
    results = {}
    for item in images_to_upload:
        res = upload_image(item)
        results[res["key"]] = res
        time.sleep(0.3)
    
    output_json = os.path.join(os.path.dirname(os.path.abspath(__file__)), "uploaded_images.json")
    with open(output_json, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\nAll image URLs saved to {output_json}")
