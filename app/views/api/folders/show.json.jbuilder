json.extract! @folder, :id, :name, :user_id
json.set! :pictures do
    @folder.pictures.each do |picture|
        json.set! picture.id  do
            json.extract!  picture, :pic_name, :user_id
            json.photoUrl url_for(picture.photo)
            json.serviceUrl picture.photo.service_url
        end
    end
end
