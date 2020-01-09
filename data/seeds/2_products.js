
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('products').insert([
        {
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Chicken Breast",
          "description": "1 pound Boneless Skinless",
          "price": "1,100.00 RWF",
          "user_id": 6,
          "image_url": "https://imgur.com/PoY6nZd"
        }, {
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Beef Round",
          "description": "or Equivalent Back Leg Red Meat (1 pound)",
          "price": "500.00 RWF",
          "user_id": 6,
          "image_url": "https://imgur.com/EEGqr8E"
        }, {
          "category": "Vegetables",
          "market_area": "Rwanda",
          "name": "Beans",
          "description": "2 pounds Beans",
          "price": "1,600.00 RWF",
          "user_id": 4,
          "image_url": "https://imgur.com/yNDFASn"
        }, {
          "category": "Grains",
          "market_area": "Rwanda",
          "name": "Rice",
          "description": "2 Pounds dry rice",
          "price": "1,000.00 RWF",
          "user_id": 6,
          "image_url": "https://imgur.com/LH41g7W"
        }, {
          "category": "Other",
          "market_area": "Rwanda",
          "name": "Eggs",
          "description": "1 Dozen",
          "price": "1",
          "user_id": 6,
          "image_url": "https://imgur.com/Kbd0eDI"
        }, {
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Chicken Breast",
          "description": "1 pound Boneless Skinless",
          "price": "1,600.00 RWF",
          "user_id": 1,
          "image_url": "https://imgur.com/PoY6nZd"
        }, {
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Beef Round",
          "description": "or Equivalent Back Leg Red Meat (1 pound)",
          "price": "1,500.00 RWF",
          "user_id": 4,
          "image_url": "https://imgur.com/EEGqr8E"
        }, {
          "category": "Vegetables",
          "market_area": "Rwanda",
          "name": "Beans",
          "description": "2 pounds Beans",
          "price": "1,500.00 RWF",
          "user_id": 6,
          "image_url": "https://imgur.com/yNDFASn"
        }, {
          "category": "Grains",
          "market_area": "Rwanda",
          "name": "Rice",
          "description": "2 Pounds dry rice",
          "price": "1,000.00 RWF",
          "user_id": 1,
          "image_url": "https://imgur.com/LH41g7W"
        }, {
          "category": "Other",
          "market_area": "Rwanda",
          "name": "Eggs",
          "description": "1 Dozen",
          "price": "130.00 RWF",
          "user_id": 1,
          "image_url": "https://imgur.com/Kbd0eDI"
        }, {
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Chicken Breast",
          "description": "1 pound Boneless Skinless",
          "price": "1,500.00 RWF",
          "user_id": 4,
          "image_url": "https://imgur.com/PoY6nZd"
        }, {
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Beef Round",
          "description": "or Equivalent Back Leg Red Meat (1 pound)",
          "price": "900.00 RWF",
          "user_id": 7,
          "image_url": "https://imgur.com/EEGqr8E"
        }, {
          "category": "Fruits",
          "market_area": "Kenya",
          "name": "Oranges",
          "description": "1 kg",
          "price": "172.28 KSh",
          "user_id": 3,
          "image_url": "https://imgur.com/xM5eFAt"
        }, {
          "category": "Grains",
          "market_area": "Kenya",
          "name": "Rice",
          "description": "white 1 kg",
          "price": "167.85 KSh",
          "user_id": 3,
          "image_url": "https://imgur.com/LH41g7W"
        }, {
          "category": "Meats",
          "market_area": "Kenya",
          "name": "Beef Round",
          "description": "1kg (or Equivalent Back Leg Red Meat)",
          "price": "480.00 KSh",
          "user_id": 3,
          "image_url": "https://imgur.com/EEGqr8E"
        }, {
          "category": "Other",
          "market_area": "Kenya",
          "name": "Milk",
          "description": "regular 1 liter",
          "price": "93.22 KSh",
          "user_id": 2,
          "image_url": "https://imgur.com/G58lmRg"
        }, {
          "category": "Vegetables",
          "market_area": "Kenya",
          "name": "Onion",
          "description": "yellow 1 kg",
          "price": "115.05 KSh",
          "user_id": 10,
          "image_url": "https://imgur.com/Y7S7BZ6"
        }, {
          "category": "Grains",
          "market_area": "Kenya",
          "name": "Rice",
          "description": "1 kg",
          "price": "167.85 KSh",
          "user_id": 10,
          "image_url": "https://imgur.com/LH41g7W"
        }, {
          "category": "Meats",
          "market_area": "Kenya",
          "name": "Beef Round",
          "description": "white 1 kg",
          "price": "480.00 KSh",
          "user_id": 2,
          "image_url": "https://imgur.com/EEGqr8E"
        }, {
          "category": "Other",
          "market_area": "Kenya",
          "name": "Milk",
          "description": "1kg (or Equivalent Back Leg Red Meat)",
          "price": "93.22 KSh",
          "user_id": 2,
          "image_url": "https://imgur.com/G58lmRg"
        }, {
          "category": "Vegetables",
          "market_area": "Kenya",
          "name": "Onion",
          "description": "regular 1 liter",
          "price": "115.05 KSh",
          "user_id": 10,
          "image_url": "https://imgur.com/Y7S7BZ6"
        }, {
          "category": "Fruits",
          "market_area": "Uganda",
          "name": "Oranges",
          "description": "0.30 kg",
          "price": "975.00 UGX",
          "user_id": 8,
          "image_url": "https://imgur.com/xM5eFAt"
        }, {
          "category": "Grains",
          "market_area": "Uganda",
          "name": "Rice",
          "description": "long grain white (0.10 kg)",
          "price": "418.75 UGX",
          "user_id": 9,
          "image_url": "https://imgur.com/LH41g7W"
        }, {
          "category": "Meats",
          "market_area": "Uganda",
          "name": "Beef Round",
          "description": "0.15 kg (or Equivalent Back Leg Red Meat)",
          "price": "1,612.50 UGX",
          "user_id": 8,
          "image_url": "https://imgur.com/EEGqr8E"
        }, {
          "category": "Other",
          "market_area": "Uganda",
          "name": "Eggs",
          "description": "2 Dozen brown",
          "price": "12,000.00 UGX",
          "user_id": 9,
          "image_url": "https://imgur.com/Kbd0eDI"
        }, {
          "category": "Vegetables",
          "market_area": "Uganda",
          "name": "Beans (1 kg)",
          "description": "1 kg",
          "price": "3,500.00 UGX",
          "user_id": 9,
          "image_url": "https://imgur.com/yNDFASn"
        }, {
          "category": "Meats",
          "market_area": "Uganda",
          "name": "Beef Round",
          "description": "0.15 kg (or Equivalent Back Leg Red Meat)",
          "price": "1,612.50 UGX",
          "user_id": 9,
          "image_url": "https://imgur.com/EEGqr8E"
        }, {
          "category": "Other",
          "market_area": "Uganda",
          "name": "Eggs",
          "description": "2 Dozen brown",
          "price": "12,000.00 UGX",
          "user_id": 8,
          "image_url": "https://imgur.com/Kbd0eDI"
        }
      ]);
};
