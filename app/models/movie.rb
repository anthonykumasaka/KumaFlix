# == Schema Information
#
# Table name: movies
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#  genre       :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Movie < ApplicationRecord
  validates :title, :description, :genre, presence: true

  has_one_attached :video
  has_one_attached :photo 
end
