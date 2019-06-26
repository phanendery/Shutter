json.extract! @picture, :id, :pic_name, :user_id, :description, :camera, :lens, :focal
json.numLikes @picture.likes.count
json.liked @picture.likers.include? current_user
json.photoUrl url_for(@picture.photo)

