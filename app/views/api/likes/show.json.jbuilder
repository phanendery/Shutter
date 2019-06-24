 json.like do
        json.extract! @like, :id, :user_id, :picture_id
    end

    json.picture do
        json.extract! @picture, :id, :pic_name, :description, :user_id
        json.photoUrl url_for(@picture.photo)
    end

    json.user do 
        json.extract! @user, :id, :username
    end