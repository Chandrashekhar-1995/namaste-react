import React from "react";
import ReactDOM from 'react-dom/client';


//  Build a Header Componend with a Logo and Nav Items & Cart.
const Header=()=>{
    return(
        <div className="header">
          <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1703767829~exp=1703768429~hmac=afcccdaff0ef78d1e73fb4d91b394e7803a12a49a59a2db79a3cf3accc59348b"/>
            <h2 className="logo-name">Food Flow</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Signin</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


  // Buid RestaurantCard Component.
  const RestaurantCard=(props)=>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        deliveryTime
    } =resData?.info;

    return(
        <div className="restaurantcard">
            <img alt="res-logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} Minuts</h4>
        </div>
    )
};


// resList
const resList=[
  {
    "info": {
      "id": "683554",
      "name": "Vadilal Ice Creams",
      "cloudinaryImageId": "3e6afaa0d8a7885a0f47988a95890228",
      "locality": "Railway Statoin Road",
      "areaName": "Golghar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "11745",
      "avgRatingString": "4.6",
      "totalRatingsString": "50+",
        "deliveryTime": 38,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/vadilal-ice-creams-railway-statoin-road-golghar-gorakhpur-683554",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "711216",
      "name": "9 Street Pizza",
      "cloudinaryImageId": "0990478618d083b42c1800148ec1e7bc",
      "locality": "Hanuman Mandir",
      "areaName": "Betiahata",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.8,
      "veg": true,
      "parentId": "424825",
      "avgRatingString": "3.8",
      "totalRatingsString": "50+",
        "deliveryTime": 50,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/9-street-pizza-hanuman-mandir-betiahata-gorakhpur-711216",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "156014",
      "name": "Tasty Zaika restaurant",
      "cloudinaryImageId": "bgasvpmywyz023ur212u",
      "locality": "Arya Nagar",
      "areaName": "Kawwa Bagh Colony",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "North Indian",
        "Chinese"
      ],
      "avgRating": 3.5,
      "veg": true,
      "parentId": "202238",
      "avgRatingString": "3.5",
      "totalRatingsString": "1K+",
        "deliveryTime": 40,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/tasty-zaika-restaurant-arya-nagar-kawwa-bagh-colony-gorakhpur-156014",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "642639",
      "name": "Chinese Street",
      "cloudinaryImageId": "wzdffof9dg30pnnel4br",
      "locality": "Railway Station Road",
      "areaName": "Bichhiya",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "Indian",
        "Sweets"
      ],
      "avgRating": 3.2,
      "parentId": "260",
      "avgRatingString": "3.2",
      "totalRatingsString": "10+",
        "deliveryTime": 39,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-street-railway-station-road-bichhiya-gorakhpur-642639",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "761456",
      "name": "The New Shop",
      "cloudinaryImageId": "c8123243de7d97ed2e59f17c1442e0ae",
      "locality": "Paidleganj",
      "areaName": "Golghar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Bakery",
        "Ice Cream",
        "Fast Food",
        "Burgers",
        "Rolls & Wraps",
        "Snacks",
        "Pastas"
      ],
      "avgRating": 2.8,
      "parentId": "211887",
      "avgRatingString": "2.8",
      "totalRatingsString": "3",
        "deliveryTime": 42,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2023-12-29 23:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-new-shop-paidleganj-golghar-gorakhpur-761456",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "804631",
      "name": "Hot Pizza King",
      "cloudinaryImageId": "e1b40533f01d421b7e13fdb45bac9058",
      "locality": "Golghar",
      "areaName": "Golghar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Beverages"
      ],
      "parentId": "8966",
      "avgRatingString": "NEW",
      "sla": {
        "deliveryTime": 50,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hot-pizza-king-golghar-gorakhpur-804631",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "691994",
      "name": "Good Food Only",
      "cloudinaryImageId": "6b5650169a3e5dd0be29dbde603794d1",
      "locality": "Arya Nagar",
      "areaName": "Golghar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "Indian",
        "Chinese",
        "Fast Food",
        "Biryani"
      ],
      "avgRating": 3.3,
      "parentId": "414631",
      "avgRatingString": "3.3",
      "totalRatingsString": "50+",
        "deliveryTime": 44,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹149",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/good-food-only-arya-nagar-golghar-gorakhpur-691994",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "693050",
      "name": "Pizza Street",
      "cloudinaryImageId": "4adf0745bf2e68668caf230a7bbbb744",
      "locality": "Station Rd",
      "areaName": "Golghar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian"
      ],
      "avgRating": 3.3,
      "parentId": "3646",
      "avgRatingString": "3.3",
      "totalRatingsString": "10+",
        "deliveryTime": 40,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹149",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-street-station-rd-golghar-gorakhpur-693050",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "804429",
      "name": "Delicious Pizza",
      "cloudinaryImageId": "6a73c3e1fdcf1e2860a25d757f596c0d",
      "locality": "Betihata Zone No 2",
      "areaName": "Golghar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Snacks",
        "Pastas",
        "Beverages"
      ],
      "parentId": "17279",
      "avgRatingString": "NEW",
        "deliveryTime": 53,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/delicious-pizza-betihata-zone-no-2-golghar-gorakhpur-804429",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "683554",
      "name": "Vadilal Ice Creams",
      "cloudinaryImageId": "3e6afaa0d8a7885a0f47988a95890228",
      "locality": "Railway Statoin Road",
      "areaName": "Golghar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "11745",
      "avgRatingString": "4.6",
      "totalRatingsString": "50+",
        "deliveryTime": 38,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/vadilal-ice-creams-railway-statoin-road-golghar-gorakhpur-683554",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "711216",
      "name": "9 Street Pizza",
      "cloudinaryImageId": "0990478618d083b42c1800148ec1e7bc",
      "locality": "Hanuman Mandir",
      "areaName": "Betiahata",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.8,
      "veg": true,
      "parentId": "424825",
      "avgRatingString": "3.8",
      "totalRatingsString": "50+",
        "deliveryTime": 50,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/9-street-pizza-hanuman-mandir-betiahata-gorakhpur-711216",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "156014",
      "name": "Tasty Zaika restaurant",
      "cloudinaryImageId": "bgasvpmywyz023ur212u",
      "locality": "Arya Nagar",
      "areaName": "Kawwa Bagh Colony",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "North Indian",
        "Chinese"
      ],
      "avgRating": 3.5,
      "veg": true,
      "parentId": "202238",
      "avgRatingString": "3.5",
      "totalRatingsString": "1K+",
        "deliveryTime": 40,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/tasty-zaika-restaurant-arya-nagar-kawwa-bagh-colony-gorakhpur-156014",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "642639",
      "name": "Chinese Street",
      "cloudinaryImageId": "wzdffof9dg30pnnel4br",
      "locality": "Railway Station Road",
      "areaName": "Bichhiya",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "Indian",
        "Sweets"
      ],
      "avgRating": 3.2,
      "parentId": "260",
      "avgRatingString": "3.2",
      "totalRatingsString": "10+",
        "deliveryTime": 39,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-street-railway-station-road-bichhiya-gorakhpur-642639",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "761456",
      "name": "The New Shop",
      "cloudinaryImageId": "c8123243de7d97ed2e59f17c1442e0ae",
      "locality": "Paidleganj",
      "areaName": "Golghar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Bakery",
        "Ice Cream",
        "Fast Food",
        "Burgers",
        "Rolls & Wraps",
        "Snacks",
        "Pastas"
      ],
      "avgRating": 2.8,
      "parentId": "211887",
      "avgRatingString": "2.8",
      "totalRatingsString": "3",
        "deliveryTime": 42,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2023-12-29 23:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-new-shop-paidleganj-golghar-gorakhpur-761456",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "804631",
      "name": "Hot Pizza King",
      "cloudinaryImageId": "e1b40533f01d421b7e13fdb45bac9058",
      "locality": "Golghar",
      "areaName": "Golghar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Beverages"
      ],
      "parentId": "8966",
      "avgRatingString": "NEW",
      "sla": {
        "deliveryTime": 50,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hot-pizza-king-golghar-gorakhpur-804631",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "691994",
      "name": "Good Food Only",
      "cloudinaryImageId": "6b5650169a3e5dd0be29dbde603794d1",
      "locality": "Arya Nagar",
      "areaName": "Golghar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "Indian",
        "Chinese",
        "Fast Food",
        "Biryani"
      ],
      "avgRating": 3.3,
      "parentId": "414631",
      "avgRatingString": "3.3",
      "totalRatingsString": "50+",
        "deliveryTime": 44,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹149",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/good-food-only-arya-nagar-golghar-gorakhpur-691994",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "693050",
      "name": "Pizza Street",
      "cloudinaryImageId": "4adf0745bf2e68668caf230a7bbbb744",
      "locality": "Station Rd",
      "areaName": "Golghar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian"
      ],
      "avgRating": 3.3,
      "parentId": "3646",
      "avgRatingString": "3.3",
      "totalRatingsString": "10+",
        "deliveryTime": 40,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹149",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-street-station-rd-golghar-gorakhpur-693050",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "804429",
      "name": "Delicious Pizza",
      "cloudinaryImageId": "6a73c3e1fdcf1e2860a25d757f596c0d",
      "locality": "Betihata Zone No 2",
      "areaName": "Golghar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Snacks",
        "Pastas",
        "Beverages"
      ],
      "parentId": "17279",
      "avgRatingString": "NEW",
        "deliveryTime": 53,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY",
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-af861e70-6cc7-4a92-8df6-be1a806a35e1"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/delicious-pizza-betihata-zone-no-2-golghar-gorakhpur-804429",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

// Build a Body Component.
const Body=()=>{
    return(
        
        <div className="res-body">
             {resList.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>)) }
        </div>
    )
}

const Footer=()=>{
  return(
    <div className="footer">
      <h4>Copyright © 2023 | Powered by Chandra Shekhar</h4>
    </div>
  )
}

// Build a AppLayout Component.
const AppLayout = ()=> {
    return (
        <div className='app'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
