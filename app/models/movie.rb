class Movie < ApplicationRecord
  has_one_attached :video
  has_one_attached :thumbnail 
end
