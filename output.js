{
	"checkout": {
		"anpl": {
			"production": {
				"stepStyle": "multi",
				"stepperNav": true,
				"steps": {
					"0": {
						"name": "Cart",
						"inNav": false,
						"pay": false
					},
					"1": {
						"name": "Step1",
						"inNav": false,
						"pay": false,
						"loggedIn": {
							"name": "Address",
							"inNav": true,
							"label": "checkout_address",
							"id": "1"
						}
					},
					"2": {
						"name": "Payment",
						"inNav": true,
						"label": "checkout_payment",
						"pay": true,
						"id": "2"
					},
					"3": {
						"name": "Overview",
						"inNav": true,
						"label": "checkout_overview",
						"id": "3",
						"pay": false
					},
					"4": {
						"name": "Confirmation",
						"pay": false,
						"inNav": false
					}
				},
				"payment": {
					"ideal": {
						"active": false,
						"symbol": "ideal",
						"position": 17
					},
					"klarna_invoice": {
						"active": false,
						"symbol": "klarna",
						"label": true,
						"position": 15
					},
					"klarna_finance": {
						"active": false,
						"symbol": "klarna",
						"label": true,
						"position": 16
					},
					"cash_on_delivery": {
						"active": false,
						"symbol": "cash_on_delivery",
						"label": true,
						"position": 9
					},
					"santander": {
						"active": false,
						"symbol": "",
						"position": 8
					},
					"billpay": {
						"active": false,
						"symbol": "billpay",
						"label": true,
						"position": 4
					},
					"billpay_invoice": {
						"active": false,
						"symbol": "billpay",
						"label": true,
						"position": 3
					},
					"billpay_paylater": {
						"active": false,
						"symbol": "paylater",
						"label": true,
						"position": 5
					},
					"directtransfer": {
						"active": false,
						"symbol": "directtransfer",
						"position": 6
					},
					"moneyorder": {
						"active": false,
						"symbol": "moneyorder",
						"label": true,
						"position": 4
					},
					"paypal": {
						"active": true,
						"symbol": "paypal",
						"position": 3
					},
					"creditcard": {
						"active": true,
						"symbol": "creditcard",
						"label": true,
						"config": {
							"availableTypes": ["visa", "mastercard"]
						},
						"position": 2
					},
					"voucherPayment": {
						"active": true,
						"symbol": "voucher",
						"label": true,
						"position": 12
					},
					"p24": {
						"active": true,
						"symbol": "p24",
						"position": 1
					}
				},
				"klarna": {
					"ordersName": "klarna_checkout",
					"active": false,
					"merchantId": "2468",
					"sharedSecret": "ryckZqFxB75WQ3o",
					"baseUri": "https://checkout.klarna.com",
					"contentType": "application/vnd.klarna.checkout.aggregated-order-v2+json",
					"fetchUri": "/checkout/orders/",
					"confirmationUri": "/checkout/klarna/confirmation.html",
					"pushUri": "/checkout/klarna/confirm/klarnacheckout?klarna_order={checkout.order.uri}"
				}
			},
			"staging": {
				"klarna": {
					"baseUri": "https://checkout.testdrive.klarna.com"
				}
			},
			"development": {
				"klarna": {
					"baseUri": "https://checkout.testdrive.klarna.com"
				}
			}
		},
		"bkbe": {
			"production": {
				"stepStyle": "multi",
				"stepperNav": true,
				"steps": {
					"0": {
						"name": "Cart",
						"inNav": false,
						"pay": false
					},
					"1": {
						"name": "Step1",
						"inNav": false,
						"pay": false,
						"loggedIn": {
							"name": "Address",
							"inNav": true,
							"label": "checkout_address",
							"id": "1"
						}
					},
					"2": {
						"name": "Payment",
						"inNav": true,
						"label": "checkout_payment",
						"pay": true,
						"id": "2"
					},
					"3": {
						"name": "Overview",
						"inNav": true,
						"label": "checkout_overview",
						"id": "3",
						"pay": false
					},
					"4": {
						"name": "Confirmation",
						"pay": false,
						"inNav": false
					}
				},
				"payment": {
					"ideal": {
						"active": false,
						"symbol": "ideal",
						"position": 17
					},
					"klarna_invoice": {
						"active": false,
						"symbol": "klarna",
						"label": true,
						"position": 15
					},
					"klarna_finance": {
						"active": false,
						"symbol": "klarna",
						"label": true,
						"position": 16
					},
					"cash_on_delivery": {
						"active": false,
						"symbol": "cash_on_delivery",
						"label": true,
						"position": 9
					},
					"santander": {
						"active": false,
						"symbol": "",
						"position": 8
					},
					"billpay": {
						"active": false,
						"symbol": "billpay",
						"label": true,
						"position": "4"
					},
					"billpay_invoice": {
						"active": false,
						"symbol": "billpay",
						"label": true,
						"position": 3
					},
					"billpay_paylater": {
						"active": false,
						"symbol": "paylater",
						"label": true,
						"position": 5
					},
					"directtransfer": {
						"active": false,
						"symbol": "directtransfer",
						"position": 6
					},
					"moneyorder": {
						"active": true,
						"symbol": "moneyorder",
						"label": true,
						"position": 7
					},
					"paypal": {
						"active": true,
						"symbol": "paypal",
						"position": 1
					},
					"creditcard": {
						"active": true,
						"symbol": "creditcard",
						"label": true,
						"config": {
							"availableTypes": ["visa", "mastercard"]
						},
						"position": 2
					},
					"voucherPayment": {
						"active": true,
						"symbol": "voucher",
						"label": true,
						"position": 12
					}
				},
				"klarna": {
					"ordersName": "klarna_checkout",
					"active": false,
					"merchantId": "2468",
					"sharedSecret": "ryckZqFxB75WQ3o",
					"baseUri": "https://checkout.klarna.com",
					"contentType": "application/vnd.klarna.checkout.aggregated-order-v2+json",
					"fetchUri": "/checkout/orders/",
					"confirmationUri": "/checkout/klarna/confirmation.html",
					"pushUri": "/checkout/klarna/confirm/klarnacheckout?klarna_order={checkout.order.uri}"
				}
			},
			"staging": {
				"klarna": {
					"baseUri": "https://checkout.testdrive.klarna.com"
				}
			},
			"development": {
				"klarna": {
					"baseUri": "https://checkout.testdrive.klarna.com"
				}
			}
		},
		"bkit": {
			"production": {
				"stepStyle": "multi",
				"stepperNav": true,
				"steps": {
					"0": {
						"name": "Cart",
						"inNav": false,
						"pay": false
					},
					"1": {
						"name": "Step1",
						"inNav": false,
						"pay": false,
						"loggedIn": {
							"name": "Address",
							"inNav": true,
							"label": "checkout_address",
							"id": "1"
						}
					},
					"2": {
						"name": "Payment",
						"inNav": true,
						"label": "checkout_payment",
						"pay": true,
						"id": "2"
					},
					"3": {
						"name": "Overview",
						"inNav": true,
						"label": "checkout_overview",
						"id": "3",
						"pay": false
					},
					"4": {
						"name": "Confirmation",
						"pay": false,
						"inNav": false
					}
				},
				"payment": {
					"ideal": {
						"active": false,
						"symbol": "ideal",
						"position": 17
					},
					"klarna_invoice": {
						"active": false,
						"symbol": "klarna",
						"label": true,
						"position": 15
					},
					"klarna_finance": {
						"active": false,
						"symbol": "klarna",
						"label": true,
						"position": 16
					},
					"cash_on_delivery": {
						"active": true,
						"symbol": "cash_on_delivery",
						"label": true,
						"position": 9
					},
					"santander": {
						"active": false,
						"symbol": "",
						"position": 8
					},
					"billpay": {
						"active": true,
						"symbol": "billpay",
						"label": true,
						"position": "4"
					},
					"billpay_invoice": {
						"active": true,
						"symbol": "billpay",
						"label": true,
						"position": 3
					},
					"billpay_paylater": {
						"active": true,
						"symbol": "paylater",
						"label": true,
						"position": 5
					},
					"directtransfer": {
						"active": true,
						"symbol": "directtransfer",
						"position": 6
					},
					"moneyorder": {
						"active": true,
						"symbol": "moneyorder",
						"label": true,
						"position": 7
					},
					"paypal": {
						"active": true,
						"symbol": "paypal",
						"position": 1
					},
					"creditcard": {
						"active": true,
						"symbol": "creditcard",
						"label": true,
						"config": {
							"availableTypes": ["visa", "mastercard"]
						},
						"position": 2
					},
					"voucherPayment": {
						"active": true,
						"symbol": "voucher",
						"label": true,
						"position": 12
					}
				},
				"klarna": {
					"ordersName": "klarna_checkout",
					"active": false,
					"merchantId": "2468",
					"sharedSecret": "ryckZqFxB75WQ3o",
					"baseUri": "https://checkout.klarna.com",
					"contentType": "application/vnd.klarna.checkout.aggregated-order-v2+json",
					"fetchUri": "/checkout/orders/",
					"confirmationUri": "/checkout/klarna/confirmation.html",
					"pushUri": "/checkout/klarna/confirm/klarnacheckout?klarna_order={checkout.order.uri}"
				}
			},
			"staging": {
				"klarna": {
					"baseUri": "https://checkout.testdrive.klarna.com"
				}
			},
			"development": {
				"klarna": {
					"baseUri": "https://checkout.testdrive.klarna.com"
				}
			}
		}
	},
	"config": {
		"anpl": {
			"production": {
				"checkout2": {
					"enabled": true,
					"klarna": false
				},
				"currency": {
					"euro_conversion_factor": 1,
					"value": 1,
					"symbol": "€",
					"positionSymbol": 0,
					"text": "EUR",
					"code": "EUR",
					"prefix": "EUR",
					"suffix": ",-",
					"class": "euro",
					"decimal_separator": ",",
					"thousand_separator": ".",
					"decimals": 2,
					"round": "math"
				},
				"product_max_add_to_cart": 99,
				"productPriceReduction": {
					"reductionPercentMinimumThreshold": 3,
					"reductionPercentShowingThreshold": 10
				},
				"product_new": {
					"badge_new_time": 2419200
				},
				"additional_info": null,
				"packstations": {
					"enabled": false
				},
				"show_sold_out_in_category": [1, 5, 9, 19, 33, 39],
				"insurance": {
					"enabled": false,
					"excluded_group_ids": [5121, 53, 468, 383, 384, 512, 392, 393]
				},
				"country": {
					"14": {
						"countryName": "Österreich",
						"isoCode2": "AT",
						"isoCode3": "AUT",
						"addressFormatId": 5,
						"taxRates": {
							"1": 20,
							"2": 10
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"21": {
						"countryName": "Belgien",
						"isoCode2": "BE",
						"isoCode3": "BEL",
						"addressFormatId": 5,
						"taxRates": {
							"1": 21,
							"2": 6
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"57": {
						"countryName": "Daenemark",
						"isoCode2": "DK",
						"isoCode3": "DNK",
						"addressFormatId": 1,
						"taxRates": {
							"1": 25,
							"2": 25
						},
						"zipRegexPattern": "^[0-9]{3,4}$"
					},
					"72": {
						"countryName": "Finnland",
						"isoCode2": "FI",
						"isoCode3": "FIN",
						"addressFormatId": 1,
						"taxRates": {
							"1": 24,
							"2": 14
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"73": {
						"countryName": "Frankreich",
						"isoCode2": "FR",
						"isoCode3": "FRA",
						"addressFormatId": 1,
						"taxRates": {
							"1": 19.6,
							"2": 5.5
						},
						"zipRegexPattern": "^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$"
					},
					"81": {
						"countryName": "Deutschland",
						"isoCode2": "DE",
						"isoCode3": "DEU",
						"addressFormatId": 5,
						"taxRates": {
							"1": 19,
							"2": 7
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"105": {
						"countryName": "Ireland",
						"isoCode2": "IE",
						"isoCode3": "IRL",
						"addressFormatId": 6,
						"taxRates": {
							"1": 23,
							"2": 13.5
						}
					},
					"107": {
						"countryName": "Italia",
						"isoCode2": "IT",
						"isoCode3": "ITA",
						"addressFormatId": 1,
						"taxRates": {
							"1": 20,
							"2": 10
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"124": {
						"countryName": "Luxemburg",
						"isoCode2": "LU",
						"isoCode3": "LUX",
						"addressFormatId": 1,
						"taxRates": {
							"1": 19,
							"2": 7
						},
						"zipRegexPattern": "^(L\\s*(-|—|–))\\s*?[\\d]{4}$"
					},
					"150": {
						"countryName": "Niederlande",
						"isoCode2": "NL",
						"isoCode3": "NLD",
						"addressFormatId": 1,
						"taxRates": {
							"1": 21,
							"2": 6
						},
						"zipRegexPattern": "^[1-9][0-9]{3}\\s?[a-zA-Z]{2}$"
					},
					"160": {
						"countryName": "Norge",
						"isoCode2": "NO",
						"isoCode3": "NOR",
						"addressFormatId": 1,
						"taxRates": {
							"1": 25,
							"2": 12
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"173": {
						"countryName": "Polen",
						"isoCode2": "PL",
						"isoCode3": "POL",
						"addressFormatId": 5,
						"taxRates": {
							"1": 23,
							"2": 8
						},
						"zipRegexPattern": "^[0-9]{2}-[0-9]{3}$"
					},
					"195": {
						"countryName": "Spanien",
						"isoCode2": "ES",
						"isoCode3": "ESP",
						"addressFormatId": 5,
						"taxRates": {
							"1": 21,
							"2": 10
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"203": {
						"countryName": "Schweden",
						"isoCode2": "SE",
						"isoCode3": "SWE",
						"addressFormatId": 1,
						"taxRates": {
							"1": 25,
							"2": 12
						},
						"zipRegexPattern": "^\\d{3}\\s?\\d{2}$"
					},
					"204": {
						"countryName": "Schweiz",
						"isoCode2": "CH",
						"isoCode3": "CHE",
						"addressFormatId": 5,
						"taxRates": {
							"1": 8,
							"2": 2.5
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"222": {
						"countryName": "United Kingdom",
						"isoCode2": "GB",
						"isoCode3": "GBR",
						"addressFormatId": 5,
						"taxRates": {
							"1": 20,
							"2": 5
						},
						"zipRegexPattern": "^[a-zA-Z]{1}[0-9a-zA-z]{1,3} [0-9]{1}[a-zA-Z]{2}"
					}
				},
				"warranty": {
					"carbonBikes": [366645, 366644, 366643, 387207, 387208, 387209, 387210, 469447, 469448, 469449, 469450, 469451]
				},
				"colors": {
					"DE": ["beige", "gelb", "grau", "grün", "orange", "pink", "braun", "rot", "lila", "blau", "weiß", "schwarz", "transparent", "oliv", "türkis", "gold", "silber", "bunt", "petrol"],
					"DK": ["beige", "gul", "grå", "grøn", "orange", "pink", "brun", "rød", "violet", "blå", "hvid", "sort", "gennemsigtig", "oliven", "turkis", "guld", "sølv", "farverig", "petroleumsgrøn"],
					"NL": ["beige", "geel", "grijs", "groen", "oranje", "roze", "bruin", "rood", "violet", "blauw", "wit", "zwart", "transparant", "olijf", "turquoise", "goud", "zilver", "bont", "petrol"],
					"EN": ["beige", "yellow", "grey", "green", "orange", "pink", "brown", "red", "purple", "blue", "white", "black", "transparent", "olive", "turquoise", "gold", "silver", "colourful", "teal"],
					"FI": ["beige", "keltainen", "harmaa", "vihreä", "oranssi", "vaaleanpunainen", "ruskea", "punainen", "violetti", "sininen", "valkoinen", "musta", "läpinäkyvä", "oliivi", "turkoosi", "kulta", "hopea", "monivärinen", "petrooli"],
					"FR": ["beige", "jaune", "gris", "vert", "orange", "rose", "marron", "rouge", "violet", "bleu", "blanc", "noir", "transparent", "olive", "turquoise", "Or", "argent", "Multicol", "ore", "Bleu pétrole"],
					"IT": ["beige", "giallo", "grigio", "verde", "arancione", "rosa", "marrone", "rosso", "viola", "blu", "bianco", "nero", "trasparente", "verde oliva", "turchese", "oro", "argento", "colorato", "petrolio"],
					"NO": ["beige", "Gul", "Grå", "Grønn", "Orange", "Rosa", "Brun", "rød", "lilla", "Blå", "Hvit", "Svart", "Transparent", "oliven", "turkis", "gull", "sølv", "Fargerik", "Bensin"],
					"PL": ["beige", "żółty", "szary", "zielony", "pomarańczowy", "różowy", "brązowy", "czerwony", "fioletowy", "niebieski", "biały", "czarny", "przezroczysty", "oliwkowy", "turkusowy", "złoty", "srebrny", "kolorowy", "petrol"],
					"ES": ["beige", "amarillo", "gris", "verde", "naranja", "rosa", "marrón", "rojo", "violeta", "azul", "blanco", "negro", "transparente", "Oliva", "Turquesa", "Dorado", "Plateado", "Multicolor", "Azul petróleo"],
					"SV": ["beige", "gelb", "grå", "grön", "orange", "pink", "brun", "röd", "violett", "lila", "blå", "vit", "svart", "transparent", "färglös", "oliv", "turkos", "guld", "silver", "flerfärgad", "Petrol"]
				},
				"newsletter": {
					"interestsCount": 10
				}
			}
		},
		"bkbe": {
			"production": {
				"checkout2": {
					"enabled": true,
					"klarna": false
				},
				"currency": {
					"euro_conversion_factor": 1,
					"value": 1,
					"symbol": "€",
					"positionSymbol": 0,
					"text": "EUR",
					"code": "EUR",
					"prefix": "EUR",
					"suffix": ",-",
					"class": "euro",
					"decimal_separator": ",",
					"thousand_separator": "",
					"decimals": 2,
					"round": "math"
				},
				"product_max_add_to_cart": 99,
				"productPriceReduction": {
					"reductionPercentMinimumThreshold": 3,
					"reductionPercentShowingThreshold": 10
				},
				"product_new": {
					"badge_new_time": 2419200
				},
				"additional_info": null,
				"packstations": {
					"enabled": false
				},
				"show_sold_out_in_category": [1, 5, 9, 19, 33, 39],
				"insurance": {
					"enabled": false,
					"excluded_group_ids": [5121, 53, 468, 383, 384, 512, 392, 393]
				},
				"country": {
					"14": {
						"countryName": "Österreich",
						"isoCode2": "AT",
						"isoCode3": "AUT",
						"addressFormatId": 5,
						"taxRates": {
							"1": 20,
							"2": 10
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"21": {
						"countryName": "België",
						"isoCode2": "BE",
						"isoCode3": "BEL",
						"addressFormatId": 5,
						"taxRates": {
							"1": 21,
							"2": 6
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"57": {
						"countryName": "Daenemark",
						"isoCode2": "DK",
						"isoCode3": "DNK",
						"addressFormatId": 1,
						"taxRates": {
							"1": 25,
							"2": 25
						},
						"zipRegexPattern": "^[0-9]{3,4}$"
					},
					"72": {
						"countryName": "Finnland",
						"isoCode2": "FI",
						"isoCode3": "FIN",
						"addressFormatId": 1,
						"taxRates": {
							"1": 24,
							"2": 14
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"73": {
						"countryName": "Frankreich",
						"isoCode2": "FR",
						"isoCode3": "FRA",
						"addressFormatId": 1,
						"taxRates": {
							"1": 19.6,
							"2": 5.5
						},
						"zipRegexPattern": "^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$"
					},
					"81": {
						"countryName": "Deutschland",
						"isoCode2": "DE",
						"isoCode3": "DEU",
						"addressFormatId": 5,
						"taxRates": {
							"1": 19,
							"2": 7
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"105": {
						"countryName": "Ireland",
						"isoCode2": "IE",
						"isoCode3": "IRL",
						"addressFormatId": 6,
						"taxRates": {
							"1": 23,
							"2": 13.5
						}
					},
					"107": {
						"countryName": "Italia",
						"isoCode2": "IT",
						"isoCode3": "ITA",
						"addressFormatId": 1,
						"taxRates": {
							"1": 20,
							"2": 10
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"124": {
						"countryName": "Luxemburg",
						"isoCode2": "LU",
						"isoCode3": "LUX",
						"addressFormatId": 1,
						"taxRates": {
							"1": 19,
							"2": 7
						},
						"zipRegexPattern": "^(L\\s*(-|—|–))\\s*?[\\d]{4}$"
					},
					"150": {
						"countryName": "Niederlande",
						"isoCode2": "NL",
						"isoCode3": "NLD",
						"addressFormatId": 1,
						"taxRates": {
							"1": 21,
							"2": 6
						},
						"zipRegexPattern": "^[1-9][0-9]{3}\\s?[a-zA-Z]{2}$"
					},
					"160": {
						"countryName": "Norge",
						"isoCode2": "NO",
						"isoCode3": "NOR",
						"addressFormatId": 1,
						"taxRates": {
							"1": 25,
							"2": 12
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"173": {
						"countryName": "Polen",
						"isoCode2": "PL",
						"isoCode3": "POL",
						"addressFormatId": 5,
						"taxRates": {
							"1": 23,
							"2": 8
						},
						"zipRegexPattern": "^[0-9]{2}-[0-9]{3}$"
					},
					"195": {
						"countryName": "Spanien",
						"isoCode2": "ES",
						"isoCode3": "ESP",
						"addressFormatId": 5,
						"taxRates": {
							"1": 21,
							"2": 10
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"203": {
						"countryName": "Schweden",
						"isoCode2": "SE",
						"isoCode3": "SWE",
						"addressFormatId": 1,
						"taxRates": {
							"1": 25,
							"2": 12
						},
						"zipRegexPattern": "^\\d{3}\\s?\\d{2}$"
					},
					"204": {
						"countryName": "Schweiz",
						"isoCode2": "CH",
						"isoCode3": "CHE",
						"addressFormatId": 5,
						"taxRates": {
							"1": 8,
							"2": 2.5
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"222": {
						"countryName": "United Kingdom",
						"isoCode2": "GB",
						"isoCode3": "GBR",
						"addressFormatId": 5,
						"taxRates": {
							"1": 20,
							"2": 5
						},
						"zipRegexPattern": "^[a-zA-Z]{1}[0-9a-zA-z]{1,3} [0-9]{1}[a-zA-Z]{2}"
					}
				},
				"warranty": {
					"carbonBikes": [366645, 366644, 366643, 387207, 387208, 387209, 387210, 469447, 469448, 469449, 469450, 469451]
				},
				"colors": {
					"DE": ["beige", "gelb", "grau", "grün", "orange", "pink", "braun", "rot", "lila", "blau", "weiß", "schwarz", "transparent", "oliv", "türkis", "gold", "silber", "bunt", "petrol"],
					"DK": ["beige", "gul", "grå", "grøn", "orange", "pink", "brun", "rød", "violet", "blå", "hvid", "sort", "gennemsigtig", "oliven", "turkis", "guld", "sølv", "farverig", "petroleumsgrøn"],
					"NL": ["beige", "geel", "grijs", "groen", "oranje", "roze", "bruin", "rood", "violet", "blauw", "wit", "zwart", "transparant", "olijf", "turquoise", "goud", "zilver", "bont", "petrol"],
					"EN": ["beige", "yellow", "grey", "green", "orange", "pink", "brown", "red", "purple", "blue", "white", "black", "transparent", "olive", "turquoise", "gold", "silver", "colourful", "teal"],
					"FI": ["beige", "keltainen", "harmaa", "vihreä", "oranssi", "vaaleanpunainen", "ruskea", "punainen", "violetti", "sininen", "valkoinen", "musta", "läpinäkyvä", "oliivi", "turkoosi", "kulta", "hopea", "monivärinen", "petrooli"],
					"FR": ["beige", "jaune", "gris", "vert", "orange", "rose", "marron", "rouge", "violet", "bleu", "blanc", "noir", "transparent", "olive", "turquoise", "Or", "argent", "Multicol", "ore", "Bleu pétrole"],
					"IT": ["beige", "giallo", "grigio", "verde", "arancione", "rosa", "marrone", "rosso", "viola", "blu", "bianco", "nero", "trasparente", "verde oliva", "turchese", "oro", "argento", "colorato", "petrolio"],
					"NO": ["beige", "Gul", "Grå", "Grønn", "Orange", "Rosa", "Brun", "rød", "lilla", "Blå", "Hvit", "Svart", "Transparent", "oliven", "turkis", "gull", "sølv", "Fargerik", "Bensin"],
					"PL": ["beige", "żółty", "szary", "zielony", "pomarańczowy", "różowy", "brązowy", "czerwony", "fioletowy", "niebieski", "biały", "czarny", "przezroczysty", "oliwkowy", "turkusowy", "złoty", "srebrny", "kolorowy", "petrol"],
					"ES": ["beige", "amarillo", "gris", "verde", "naranja", "rosa", "marrón", "rojo", "violeta", "azul", "blanco", "negro", "transparente", "Oliva", "Turquesa", "Dorado", "Plateado", "Multicolor", "Azul petróleo"],
					"SV": ["beige", "gelb", "grå", "grön", "orange", "pink", "brun", "röd", "violett", "lila", "blå", "vit", "svart", "transparent", "färglös", "oliv", "turkos", "guld", "silver", "flerfärgad", "Petrol"]
				},
				"newsletter": {
					"interestsCount": 10
				},
				"googleSiteVerification": "yBAco_6L0d1XISkO-SFPmffmeXzrDiNJdsycoCxoYEA",
				"moneyOrderInformation": {
					"payee": "Internetstores GmbH",
					"bic": "SWBSDESSXXX",
					"iban": "DE79600907000640267041",
					"bank": "Südwestbank AG Stuttgart",
					"reference": "Order number"
				}
			}
		},
		"bkit": {
			"production": {
				"checkout2": {
					"enabled": true,
					"klarna": false
				},
				"currency": {
					"euro_conversion_factor": 1,
					"value": 1,
					"symbol": "€",
					"positionSymbol": 0,
					"text": "EUR",
					"code": "EUR",
					"prefix": "EUR",
					"suffix": ",-",
					"class": "euro",
					"decimal_separator": ",",
					"thousand_separator": ".",
					"decimals": 2,
					"round": "math"
				},
				"product_max_add_to_cart": 99,
				"productPriceReduction": {
					"reductionPercentMinimumThreshold": 3,
					"reductionPercentShowingThreshold": 10
				},
				"product_new": {
					"badge_new_time": 2419200
				},
				"additional_info": null,
				"packstations": {
					"enabled": false
				},
				"show_sold_out_in_category": [1, 5, 9, 19, 33, 39],
				"insurance": {
					"enabled": false,
					"excluded_group_ids": [5121, 53, 468, 383, 384, 512, 392, 393]
				},
				"country": {
					"14": {
						"countryName": "Österreich",
						"isoCode2": "AT",
						"isoCode3": "AUT",
						"addressFormatId": 5,
						"taxRates": {
							"1": 20,
							"2": 10
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"21": {
						"countryName": "Belgien",
						"isoCode2": "BE",
						"isoCode3": "BEL",
						"addressFormatId": 5,
						"taxRates": {
							"1": 21,
							"2": 6
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"57": {
						"countryName": "Daenemark",
						"isoCode2": "DK",
						"isoCode3": "DNK",
						"addressFormatId": 1,
						"taxRates": {
							"1": 25,
							"2": 25
						},
						"zipRegexPattern": "^[0-9]{3,4}$"
					},
					"72": {
						"countryName": "Finnland",
						"isoCode2": "FI",
						"isoCode3": "FIN",
						"addressFormatId": 1,
						"taxRates": {
							"1": 24,
							"2": 14
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"73": {
						"countryName": "Frankreich",
						"isoCode2": "FR",
						"isoCode3": "FRA",
						"addressFormatId": 1,
						"taxRates": {
							"1": 19.6,
							"2": 5.5
						},
						"zipRegexPattern": "^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$"
					},
					"81": {
						"countryName": "Deutschland",
						"isoCode2": "DE",
						"isoCode3": "DEU",
						"addressFormatId": 5,
						"taxRates": {
							"1": 19,
							"2": 7
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"105": {
						"countryName": "Ireland",
						"isoCode2": "IE",
						"isoCode3": "IRL",
						"addressFormatId": 6,
						"taxRates": {
							"1": 23,
							"2": 13.5
						}
					},
					"107": {
						"countryName": "Italia",
						"isoCode2": "IT",
						"isoCode3": "ITA",
						"addressFormatId": 1,
						"taxRates": {
							"1": 20,
							"2": 10
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"124": {
						"countryName": "Luxemburg",
						"isoCode2": "LU",
						"isoCode3": "LUX",
						"addressFormatId": 1,
						"taxRates": {
							"1": 19,
							"2": 7
						},
						"zipRegexPattern": "^(L\\s*(-|—|–))\\s*?[\\d]{4}$"
					},
					"150": {
						"countryName": "Niederlande",
						"isoCode2": "NL",
						"isoCode3": "NLD",
						"addressFormatId": 1,
						"taxRates": {
							"1": 21,
							"2": 6
						},
						"zipRegexPattern": "^[1-9][0-9]{3}\\s?[a-zA-Z]{2}$"
					},
					"160": {
						"countryName": "Norge",
						"isoCode2": "NO",
						"isoCode3": "NOR",
						"addressFormatId": 1,
						"taxRates": {
							"1": 25,
							"2": 12
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"173": {
						"countryName": "Polen",
						"isoCode2": "PL",
						"isoCode3": "POL",
						"addressFormatId": 5,
						"taxRates": {
							"1": 23,
							"2": 8
						},
						"zipRegexPattern": "^[0-9]{2}-[0-9]{3}$"
					},
					"195": {
						"countryName": "Spanien",
						"isoCode2": "ES",
						"isoCode3": "ESP",
						"addressFormatId": 5,
						"taxRates": {
							"1": 21,
							"2": 10
						},
						"zipRegexPattern": "^[0-9]{5}$"
					},
					"203": {
						"countryName": "Schweden",
						"isoCode2": "SE",
						"isoCode3": "SWE",
						"addressFormatId": 1,
						"taxRates": {
							"1": 25,
							"2": 12
						},
						"zipRegexPattern": "^\\d{3}\\s?\\d{2}$"
					},
					"204": {
						"countryName": "Schweiz",
						"isoCode2": "CH",
						"isoCode3": "CHE",
						"addressFormatId": 5,
						"taxRates": {
							"1": 8,
							"2": 2.5
						},
						"zipRegexPattern": "^[0-9]{4}$"
					},
					"222": {
						"countryName": "United Kingdom",
						"isoCode2": "GB",
						"isoCode3": "GBR",
						"addressFormatId": 5,
						"taxRates": {
							"1": 20,
							"2": 5
						},
						"zipRegexPattern": "^[a-zA-Z]{1}[0-9a-zA-z]{1,3} [0-9]{1}[a-zA-Z]{2}"
					}
				},
				"warranty": {
					"carbonBikes": [366645, 366644, 366643, 387207, 387208, 387209, 387210, 469447, 469448, 469449, 469450, 469451]
				},
				"colors": {
					"DE": ["beige", "gelb", "grau", "grün", "orange", "pink", "braun", "rot", "lila", "blau", "weiß", "schwarz", "transparent", "oliv", "türkis", "gold", "silber", "bunt", "petrol"],
					"DK": ["beige", "gul", "grå", "grøn", "orange", "pink", "brun", "rød", "violet", "blå", "hvid", "sort", "gennemsigtig", "oliven", "turkis", "guld", "sølv", "farverig", "petroleumsgrøn"],
					"NL": ["beige", "geel", "grijs", "groen", "oranje", "roze", "bruin", "rood", "violet", "blauw", "wit", "zwart", "transparant", "olijf", "turquoise", "goud", "zilver", "bont", "petrol"],
					"EN": ["beige", "yellow", "grey", "green", "orange", "pink", "brown", "red", "purple", "blue", "white", "black", "transparent", "olive", "turquoise", "gold", "silver", "colourful", "teal"],
					"FI": ["beige", "keltainen", "harmaa", "vihreä", "oranssi", "vaaleanpunainen", "ruskea", "punainen", "violetti", "sininen", "valkoinen", "musta", "läpinäkyvä", "oliivi", "turkoosi", "kulta", "hopea", "monivärinen", "petrooli"],
					"FR": ["beige", "jaune", "gris", "vert", "orange", "rose", "marron", "rouge", "violet", "bleu", "blanc", "noir", "transparent", "olive", "turquoise", "Or", "argent", "Multicol", "ore", "Bleu pétrole"],
					"IT": ["beige", "giallo", "grigio", "verde", "arancione", "rosa", "marrone", "rosso", "viola", "blu", "bianco", "nero", "trasparente", "verde oliva", "turchese", "oro", "argento", "colorato", "petrolio"],
					"NO": ["beige", "Gul", "Grå", "Grønn", "Orange", "Rosa", "Brun", "rød", "lilla", "Blå", "Hvit", "Svart", "Transparent", "oliven", "turkis", "gull", "sølv", "Fargerik", "Bensin"],
					"PL": ["beige", "żółty", "szary", "zielony", "pomarańczowy", "różowy", "brązowy", "czerwony", "fioletowy", "niebieski", "biały", "czarny", "przezroczysty", "oliwkowy", "turkusowy", "złoty", "srebrny", "kolorowy", "petrol"],
					"ES": ["beige", "amarillo", "gris", "verde", "naranja", "rosa", "marrón", "rojo", "violeta", "azul", "blanco", "negro", "transparente", "Oliva", "Turquesa", "Dorado", "Plateado", "Multicolor", "Azul petróleo"],
					"SV": ["beige", "gelb", "grå", "grön", "orange", "pink", "brun", "röd", "violett", "lila", "blå", "vit", "svart", "transparent", "färglös", "oliv", "turkos", "guld", "silver", "flerfärgad", "Petrol"]
				},
				"newsletter": {
					"interestsCount": 10
				}
			}
		}
	},
	"forms": {
		"anpl": {
			"production": {
				"customerLogin": [{
					"type": "email",
					"name": "login_email",
					"label": "form_label_email",
					"required": true,
					"tabIndex": 1
				}, {
					"type": "password",
					"name": "login_password",
					"label": "password_form_label",
					"required": true,
					"tabIndex": 2
				}],
				"customerData": [{
					"type": "gender",
					"name": "gender",
					"label": "form_label_gender",
					"required": true,
					"tabIndex": 1
				}, {
					"type": "text",
					"name": "firstName",
					"label": "form_label_first_name",
					"required": true,
					"tabIndex": 2,
					"constraints": [{
						"type": "Length",
						"min": 2,
						"minMessage": "form_firstname_error"
					}]
				}, {
					"type": "text",
					"name": "lastName",
					"label": "form_label_last_name",
					"required": true,
					"tabIndex": 3,
					"constraints": [{
						"type": "Length",
						"min": 2,
						"minMessage": "form_lastname_error"
					}]
				}, {
					"type": "telephone",
					"name": "telephone",
					"label": "form_label_telephone",
					"required": true,
					"tabIndex": 4,
					"constraints": [{
						"type": "Pattern",
						"pattern": "^[0-9\\-+.,/() ]{2,20}$",
						"message": "form_phone_error"
					}]
				}, {
					"type": "date",
					"name": "birthday",
					"label": "form_label_birthday",
					"required": true,
					"tabIndex": 5
				}],
				"customerEmail": [{
					"type": "email",
					"name": "email",
					"label": "form_label_email_new",
					"required": true,
					"tabIndex": 6,
					"constraints": [{
						"type": "IsEmailValid",
						"message": "form_mail_error_notvalid"
					}, {
						"type": "IsBlacklisted",
						"message": "form_mail_error"
					}, {
						"type": "IsUniqueUsername",
						"message": "form_mail_error_alreadyused"
					}]
				}, {
					"type": "email",
					"name": "emailVerify",
					"label": "form_label_email_new_repeat",
					"required": true,
					"tabIndex": 7,
					"constraints": [{
						"type": "IsEmailValid",
						"message": "form_mail_error_notvalid"
					}, {
						"type": "IsBlacklisted",
						"message": "form_mail_error"
					}, {
						"type": "IsUniqueUsername",
						"message": "form_mail_error_alreadyused"
					}]
				}],
				"customerPassword": [{
					"type": "password",
					"name": "password",
					"label": "customer_password_old",
					"required": true
				}, {
					"type": "password",
					"name": "passwordNew",
					"label": "customer_password_new",
					"hint": "form_hint_password",
					"required": true,
					"tabIndex": 8,
					"constraints": [{
						"type": "Pattern",
						"pattern": "^[a-zA-Z0-9_\\-.,@\\$\\/=!?+*():;#%&§]{5,32}$",
						"message": null
					}]
				}],
				"customerForgotPassword": [{
					"type": "email",
					"name": "password_email",
					"label": "form_label_email",
					"required": true,
					"tabIndex": 9
				}],
				"customerRestorePassword": [{
					"type": "password",
					"name": "password",
					"label": "customer_password_new",
					"hint": "form_hint_password",
					"required": true,
					"tabIndex": 10,
					"constraints": [{
						"type": "Pattern",
						"pattern": "^[a-zA-Z0-9_\\-.,@\\$\\/=!?+*():;#%&§]{5,32}$",
						"message": null
					}]
				}]
			}
		},
		"bkbe": {
			"production": {
				"customerLogin": [{
					"type": "email",
					"name": "login_email",
					"label": "form_label_email",
					"required": true,
					"tabIndex": 1
				}, {
					"type": "password",
					"name": "login_password",
					"label": "password_form_label",
					"required": true,
					"tabIndex": 2
				}],
				"customerData": [{
					"type": "gender",
					"name": "gender",
					"label": "form_label_gender",
					"required": true,
					"tabIndex": 1
				}, {
					"type": "text",
					"name": "firstName",
					"label": "form_label_first_name",
					"required": true,
					"tabIndex": 2,
					"constraints": [{
						"type": "Length",
						"min": 2,
						"minMessage": "form_firstname_error"
					}]
				}, {
					"type": "text",
					"name": "lastName",
					"label": "form_label_last_name",
					"required": true,
					"tabIndex": 3,
					"constraints": [{
						"type": "Length",
						"min": 2,
						"minMessage": "form_lastname_error"
					}]
				}, {
					"type": "telephone",
					"name": "telephone",
					"label": "form_label_telephone",
					"required": true,
					"tabIndex": 4,
					"constraints": [{
						"type": "Pattern",
						"pattern": "^[0-9\\-+.,/() ]{2,20}$",
						"message": "form_phone_error"
					}]
				}, {
					"type": "date",
					"name": "birthday",
					"label": "form_label_birthday",
					"required": true,
					"tabIndex": 5
				}],
				"customerEmail": [{
					"type": "email",
					"name": "email",
					"label": "form_label_email_new",
					"required": true,
					"tabIndex": 6,
					"constraints": [{
						"type": "IsEmailValid",
						"message": "form_mail_error_notvalid"
					}, {
						"type": "IsBlacklisted",
						"message": "form_mail_error"
					}, {
						"type": "IsUniqueUsername",
						"message": "form_mail_error_alreadyused"
					}]
				}, {
					"type": "email",
					"name": "emailVerify",
					"label": "form_label_email_new_repeat",
					"required": true,
					"tabIndex": 7,
					"constraints": [{
						"type": "IsEmailValid",
						"message": "form_mail_error_notvalid"
					}, {
						"type": "IsBlacklisted",
						"message": "form_mail_error"
					}, {
						"type": "IsUniqueUsername",
						"message": "form_mail_error_alreadyused"
					}]
				}],
				"customerPassword": [{
					"type": "password",
					"name": "password",
					"label": "customer_password_old",
					"required": true
				}, {
					"type": "password",
					"name": "passwordNew",
					"label": "customer_password_new",
					"hint": "form_hint_password",
					"required": true,
					"tabIndex": 8,
					"constraints": [{
						"type": "Pattern",
						"pattern": "^[a-zA-Z0-9_\\-.,@\\$\\/=!?+*():;#%&§]{5,32}$",
						"message": null
					}]
				}],
				"customerForgotPassword": [{
					"type": "email",
					"name": "password_email",
					"label": "form_label_email",
					"required": true,
					"tabIndex": 9
				}],
				"customerRestorePassword": [{
					"type": "password",
					"name": "password",
					"label": "customer_password_new",
					"hint": "form_hint_password",
					"required": true,
					"tabIndex": 10,
					"constraints": [{
						"type": "Pattern",
						"pattern": "^[a-zA-Z0-9_\\-.,@\\$\\/=!?+*():;#%&§]{5,32}$",
						"message": null
					}]
				}]
			}
		},
		"bkit": {
			"production": {
				"customerLogin": [{
					"type": "email",
					"name": "login_email",
					"label": "form_label_email",
					"required": true,
					"tabIndex": 1
				}, {
					"type": "password",
					"name": "login_password",
					"label": "password_form_label",
					"required": true,
					"tabIndex": 2
				}],
				"customerData": [{
					"type": "gender",
					"name": "gender",
					"label": "form_label_gender",
					"required": true,
					"tabIndex": 1
				}, {
					"type": "text",
					"name": "firstName",
					"label": "form_label_first_name",
					"required": true,
					"tabIndex": 2,
					"constraints": [{
						"type": "Length",
						"min": 2,
						"minMessage": "form_firstname_error"
					}]
				}, {
					"type": "text",
					"name": "lastName",
					"label": "form_label_last_name",
					"required": true,
					"tabIndex": 3,
					"constraints": [{
						"type": "Length",
						"min": 2,
						"minMessage": "form_lastname_error"
					}]
				}, {
					"type": "text",
					"name": "taxNumber",
					"label": "form_label_taxnumber",
					"required": false,
					"tabIndex": 4,
					"constraints": [{
						"type": "CodiceFiscale",
						"pattern": "^[0-9\\-+.,/() ]{2,20}$",
						"message": "form_taxnumber_error"
					}]
				}, {
					"type": "telephone",
					"name": "telephone",
					"label": "form_label_telephone",
					"required": true,
					"tabIndex": 5,
					"constraints": [{
						"type": "Pattern",
						"pattern": "^[0-9\\-+.,/() ]{2,20}$",
						"message": "form_phone_error"
					}]
				}, {
					"type": "date",
					"name": "birthday",
					"label": "form_label_birthday",
					"required": true,
					"tabIndex": 6
				}],
				"customerEmail": [{
					"type": "email",
					"name": "email",
					"label": "form_label_email_new",
					"required": true,
					"tabIndex": 6,
					"constraints": [{
						"type": "IsEmailValid",
						"message": "form_mail_error_notvalid"
					}, {
						"type": "IsBlacklisted",
						"message": "form_mail_error"
					}, {
						"type": "IsUniqueUsername",
						"message": "form_mail_error_alreadyused"
					}]
				}, {
					"type": "email",
					"name": "emailVerify",
					"label": "form_label_email_new_repeat",
					"required": true,
					"tabIndex": 7,
					"constraints": [{
						"type": "IsEmailValid",
						"message": "form_mail_error_notvalid"
					}, {
						"type": "IsBlacklisted",
						"message": "form_mail_error"
					}, {
						"type": "IsUniqueUsername",
						"message": "form_mail_error_alreadyused"
					}]
				}],
				"customerPassword": [{
					"type": "password",
					"name": "password",
					"label": "customer_password_old",
					"required": true
				}, {
					"type": "password",
					"name": "passwordNew",
					"label": "customer_password_new",
					"hint": "form_hint_password",
					"required": true,
					"tabIndex": 8,
					"constraints": [{
						"type": "Pattern",
						"pattern": "^[a-zA-Z0-9_\\-.,@\\$\\/=!?+*():;#%&§]{5,32}$",
						"message": null
					}]
				}],
				"customerForgotPassword": [{
					"type": "email",
					"name": "password_email",
					"label": "form_label_email",
					"required": true,
					"tabIndex": 9
				}],
				"customerRestorePassword": [{
					"type": "password",
					"name": "password",
					"label": "customer_password_new",
					"hint": "form_hint_password",
					"required": true,
					"tabIndex": 10,
					"constraints": [{
						"type": "Pattern",
						"pattern": "^[a-zA-Z0-9_\\-.,@\\$\\/=!?+*():;#%&§]{5,32}$",
						"message": null
					}]
				}]
			}
		}
	}
}