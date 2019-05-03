json.array! @pictures do |picture|
    json.extract! picture, :id, :pic_name, :user_id
    json.photoUrl url_for(picture.photo)
end