 json.like do
        json.extract! @like, :id, :user_id, :picture_id
    end

    json.picture do
        json.extract! @picture, :id, :pic_name, :description, :user_id
        json.photoUrl url_for(@picture.photo) 
        json.numLikes @picture.likes.count
        json.liked @picture.likers.include? current_user
    end

    json.user do 
        json.extract! @user, :id, :username
    end