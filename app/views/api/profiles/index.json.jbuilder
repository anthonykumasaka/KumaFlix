@profiles.each do |profile| 
  json.set! profile.id do
    json.partial! 'api/profiles/profiles', profile: profile 
  end 
end 