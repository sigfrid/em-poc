class City
  include ActiveModel::Model

  attr_accessor :state, :name

  def self.all
    [['Knoxville', 'Tennessee'],
    ['Fayetteville', 'North Carolina'],
    ['Rapid City', 'North Dakota'],
    ['Greensboro', 'North Carolina'],
    ['Greenville', 'North Carolina'],
    ['Aberdeen', 'North Dakota'],
    ['Chattanooga', 'Tennessee'],
    ['Winston-Salem', 'North Carolina'],
    ['Sioux Falls', 'North Dakota']].each_with_object([]) do |city, collection|
      collection << City.new(state: city[1], name: city[0])
    end
  end
end
