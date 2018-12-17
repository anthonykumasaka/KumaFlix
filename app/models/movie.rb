class Movie < ApplicationRecord
  validates :title, :description, :genre, presence: true

  has_one_attached :video
  has_one_attached :photo 
end
