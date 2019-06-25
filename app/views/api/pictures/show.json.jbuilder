json.extract! @picture, :id, :pic_name, :user_id, :description, :camera, :lens, :focal
json.photoUrl url_for(@picture.photo)
