class State
  include ActiveModel::Model

  attr_accessor :name

  def self.all
    ['Tennessee', 'North Carolina', 'North Dakota'].each_with_object([]) do |state, collection|
      collection << State.new(name: state)
    end
  end
end
