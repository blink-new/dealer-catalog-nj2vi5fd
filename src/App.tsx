import React, { useState } from 'react'
import { Car, Search, Filter, Star, Heart, Eye, MapPin, Calendar, Fuel } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'

// Sample vehicle data
const vehicles = [
  {
    id: 1,
    brand: 'BMW',
    model: 'X5 M50i',
    year: 2024,
    price: 89900,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    mileage: 5420,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    location: 'Los Angeles, CA',
    features: ['Navigation', 'Leather Seats', 'Sunroof', 'Premium Audio'],
    isFeatured: true,
    isNew: true
  },
  {
    id: 2,
    brand: 'Mercedes-Benz',
    model: 'C-Class AMG',
    year: 2023,
    price: 67500,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    mileage: 12800,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    location: 'New York, NY',
    features: ['AMG Package', 'Premium Sound', 'Heated Seats'],
    isFeatured: true,
    isNew: false
  },
  {
    id: 3,
    brand: 'Audi',
    model: 'Q7 Prestige',
    year: 2024,
    price: 75900,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    mileage: 8200,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    location: 'Miami, FL',
    features: ['Virtual Cockpit', 'Matrix LED', 'Air Suspension'],
    isFeatured: false,
    isNew: true
  },
  {
    id: 4,
    brand: 'Tesla',
    model: 'Model S Plaid',
    year: 2023,
    price: 119900,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    mileage: 15600,
    fuel: 'Electric',
    transmission: 'Automatic',
    location: 'San Francisco, CA',
    features: ['Autopilot', 'Premium Interior', 'Supercharging'],
    isFeatured: true,
    isNew: false
  },
  {
    id: 5,
    brand: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    price: 134900,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80',
    mileage: 2100,
    fuel: 'Gasoline',
    transmission: 'Manual',
    location: 'Chicago, IL',
    features: ['Sport Chrono', 'PASM', 'Sport Exhaust'],
    isFeatured: false,
    isNew: true
  },
  {
    id: 6,
    brand: 'Lexus',
    model: 'RX 450h',
    year: 2023,
    price: 52900,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    mileage: 18900,
    fuel: 'Hybrid',
    transmission: 'CVT',
    location: 'Seattle, WA',
    features: ['Hybrid System', 'Mark Levinson', 'Safety System+'],
    isFeatured: false,
    isNew: false
  }
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [brandFilter, setBrandFilter] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')
  const [fuelFilter, setFuelFilter] = useState('all')
  const [favoriteIds, setFavoriteIds] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavoriteIds(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBrand = brandFilter === 'all' || vehicle.brand === brandFilter
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'under50k' && vehicle.price < 50000) ||
                        (priceFilter === '50k-100k' && vehicle.price >= 50000 && vehicle.price < 100000) ||
                        (priceFilter === 'over100k' && vehicle.price >= 100000)
    const matchesFuel = fuelFilter === 'all' || vehicle.fuel === fuelFilter

    return matchesSearch && matchesBrand && matchesPrice && matchesFuel
  })

  const featuredVehicles = vehicles.filter(v => v.isFeatured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AutoDealer</h1>
                <p className="text-sm text-gray-500">Premium Vehicle Catalog</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Contact</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Find Your Perfect Vehicle
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover premium vehicles from trusted dealers. Your dream car is just a click away.
          </p>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex items-center space-x-4 max-w-lg w-full">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by brand or model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/90 border-0 text-gray-900"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={brandFilter} onValueChange={setBrandFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                <SelectItem value="BMW">BMW</SelectItem>
                <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
                <SelectItem value="Audi">Audi</SelectItem>
                <SelectItem value="Tesla">Tesla</SelectItem>
                <SelectItem value="Porsche">Porsche</SelectItem>
                <SelectItem value="Lexus">Lexus</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under50k">Under $50k</SelectItem>
                <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                <SelectItem value="over100k">Over $100k</SelectItem>
              </SelectContent>
            </Select>

            <Select value={fuelFilter} onValueChange={setFuelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Fuel Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Gasoline">Gasoline</SelectItem>
                <SelectItem value="Electric">Electric</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={() => {
              setBrandFilter('all')
              setPriceFilter('all')
              setFuelFilter('all')
              setSearchTerm('')
            }}>
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      {featuredVehicles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-6">
            <Star className="h-6 w-6 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900">Featured Vehicles</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVehicles.slice(0, 3).map((vehicle) => (
              <Card key={vehicle.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {vehicle.isNew && (
                      <Badge className="bg-green-500 hover:bg-green-600">NEW</Badge>
                    )}
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">FEATURED</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                    onClick={() => toggleFavorite(vehicle.id)}
                  >
                    <Heart className={`h-4 w-4 ${favoriteIds.includes(vehicle.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{vehicle.brand}</h4>
                      <p className="text-gray-600">{vehicle.model} {vehicle.year}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">${vehicle.price.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>{vehicle.mileage.toLocaleString()} miles</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Fuel className="h-4 w-4" />
                      <span>{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{vehicle.location}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 mb-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View Details</Button>
                    <Button variant="outline" className="flex-1">Contact Dealer</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All Vehicles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            All Vehicles ({filteredVehicles.length})
          </h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Sort by:</span>
            <Select defaultValue="price-low">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="year-new">Year: Newest First</SelectItem>
                <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {vehicle.isNew && (
                    <Badge className="bg-green-500 hover:bg-green-600">NEW</Badge>
                  )}
                  {vehicle.isFeatured && (
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">FEATURED</Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                  onClick={() => toggleFavorite(vehicle.id)}
                >
                  <Heart className={`h-4 w-4 ${favoriteIds.includes(vehicle.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </Button>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{vehicle.brand}</h4>
                    <p className="text-gray-600">{vehicle.model} {vehicle.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">${vehicle.price.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span>{vehicle.mileage.toLocaleString()} miles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-4 w-4" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{vehicle.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {vehicle.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {vehicle.features.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{vehicle.features.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View Details</Button>
                  <Button variant="outline" className="flex-1">Contact</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <Car className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No vehicles found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">AutoDealer</h3>
              </div>
              <p className="text-gray-400">Premium vehicle catalog for discerning customers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Browse</h4>
              <ul className="space-y-2 text-gray-400">
                <li>New Vehicles</li>
                <li>Used Vehicles</li>
                <li>Featured Cars</li>
                <li>Luxury Collection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Financing</li>
                <li>Trade-In</li>
                <li>Service Center</li>
                <li>Parts & Accessories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1-800-AUTO-CAR</li>
                <li>info@autodealer.com</li>
                <li>123 Car Street, Auto City</li>
                <li>Mon-Sat: 9AM-7PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoDealer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App