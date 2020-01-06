
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          "id": 1,
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Chicken Breast",
          "description": "1 pound Boneless Skinless",
          "price": "1,100.00 RWF",
          "user_id": 6
        }, {
          "id": 2,
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Beef Round",
          "description": "or Equivalent Back Leg Red Meat (1 pound)",
          "price": "500.00 RWF",
          "user_id": 6
        }, {
          "id": 3,
          "category": "Vegetables",
          "market_area": "Rwanda",
          "name": "Beans",
          "description": "2 pounds Beans",
          "price": "1,600.00 RWF",
          "user_id": 4
        }, {
          "id": 4,
          "category": "Grains",
          "market_area": "Rwanda",
          "name": "Rice",
          "description": "2 Pounds dry rice",
          "price": "1,000.00 RWF",
          "user_id": 6
        }, {
          "id": 5,
          "category": "Other",
          "market_area": "Rwanda",
          "name": "Eggs",
          "description": "1 Dozen",
          "price": "1",
          "user_id": 6
        }, {
          "id": 6,
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Chicken Breast",
          "description": "1 pound Boneless Skinless",
          "price": "1,600.00 RWF",
          "user_id": 1
        }, {
          "id": 7,
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Beef Round",
          "description": "or Equivalent Back Leg Red Meat (1 pound)",
          "price": "1,500.00 RWF",
          "user_id": 4
        }, {
          "id": 8,
          "category": "Vegetables",
          "market_area": "Rwanda",
          "name": "Beans",
          "description": "2 pounds Beans",
          "price": "1,500.00 RWF",
          "user_id": 6
        }, {
          "id": 9,
          "category": "Grains",
          "market_area": "Rwanda",
          "name": "Rice",
          "description": "2 Pounds dry rice",
          "price": "1,000.00 RWF",
          "user_id": 1
        }, {
          "id": 10,
          "category": "Other",
          "market_area": "Rwanda",
          "name": "Eggs",
          "description": "1 Dozen",
          "price": "130.00 RWF",
          "user_id": 1
        }, {
          "id": 11,
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Chicken Breast",
          "description": "1 pound Boneless Skinless",
          "price": "1,500.00 RWF",
          "user_id": 4
        }, {
          "id": 12,
          "category": "Meats",
          "market_area": "Rwanda",
          "name": "Beef Round",
          "description": "or Equivalent Back Leg Red Meat (1 pound)",
          "price": "900.00 RWF",
          "user_id": 7
        }, {
          "id": 13,
          "category": "Fruits",
          "market_area": "Kenya",
          "name": "Oranges",
          "description": "1 kg",
          "price": "172.28 KSh",
          "user_id": 3
        }, {
          "id": 14,
          "category": "Grains",
          "market_area": "Kenya",
          "name": "Rice",
          "description": "white 1 kg",
          "price": "167.85 KSh",
          "user_id": 3
        }, {
          "id": 15,
          "category": "Meats",
          "market_area": "Kenya",
          "name": "Beef Round",
          "description": "1kg (or Equivalent Back Leg Red Meat)",
          "price": "480.00 KSh",
          "user_id": 3
        }, {
          "id": 16,
          "category": "Other",
          "market_area": "Kenya",
          "name": "Milk",
          "description": "regular 1 liter",
          "price": "93.22 KSh",
          "user_id": 2
        }, {
          "id": 17,
          "category": "Vegetables",
          "market_area": "Kenya",
          "name": "Onion",
          "description": "yellow 1 kg",
          "price": "115.05 KSh",
          "user_id": 10
        }, {
          "id": 18,
          "category": "Grains",
          "market_area": "Kenya",
          "name": "Rice",
          "description": "1 kg",
          "price": "167.85 KSh",
          "user_id": 10
        }, {
          "id": 19,
          "category": "Meats",
          "market_area": "Kenya",
          "name": "Beef Round",
          "description": "white 1 kg",
          "price": "480.00 KSh",
          "user_id": 2
        }, {
          "id": 20,
          "category": "Other",
          "market_area": "Kenya",
          "name": "Milk",
          "description": "1kg (or Equivalent Back Leg Red Meat)",
          "price": "93.22 KSh",
          "user_id": 2
        }, {
          "id": 21,
          "category": "Vegetables",
          "market_area": "Kenya",
          "name": "Onion",
          "description": "regular 1 liter",
          "price": "115.05 KSh",
          "user_id": 10
        }, {
          "id": 22,
          "category": "Fruits",
          "market_area": "Uganda",
          "name": "Oranges",
          "description": "0.30 kg",
          "price": "975.00 UGX",
          "user_id": 8
        }, {
          "id": 23,
          "category": "Grains",
          "market_area": "Uganda",
          "name": "Rice",
          "description": "long grain white (0.10 kg)",
          "price": "418.75 UGX",
          "user_id": 9
        }, {
          "id": 24,
          "category": "Meats",
          "market_area": "Uganda",
          "name": "Beef Round",
          "description": "0.15 kg (or Equivalent Back Leg Red Meat)",
          "price": "1,612.50 UGX",
          "user_id": 8
        }, {
          "id": 25,
          "category": "Other",
          "market_area": "Uganda",
          "name": "Eggs",
          "description": "2 Dozen brown",
          "price": "12,000.00 UGX",
          "user_id": 9
        }, {
          "id": 26,
          "category": "Vegetables",
          "market_area": "Uganda",
          "name": "Beans (1 kg)",
          "description": "1 kg",
          "price": "3,500.00 UGX",
          "user_id": 9
        }, {
          "id": 27,
          "category": "Meats",
          "market_area": "Uganda",
          "name": "Beef Round",
          "description": "0.15 kg (or Equivalent Back Leg Red Meat)",
          "price": "1,612.50 UGX",
          "user_id": 9
        }, {
          "id": 28,
          "category": "Other",
          "market_area": "Uganda",
          "name": "Eggs",
          "description": "2 Dozen brown",
          "price": "12,000.00 UGX",
          "user_id": 8
        }
      ]);
    });
};