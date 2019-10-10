json.extract! @picture, :id, :pic_name, :user_id, :description, :camera, :lens, :focal
json.user @picture.user.username
json.numLikes @picture.likes.count
json.liked @picture.likers.include? current_user
json.photoUrl url_for(@picture.photo)
json.serviceUrl @picture.photo.service_url
json.set! :comments do 
    @picture.comments.each do |comment|
        json.set! comment.id do
            json.partial! comment
        end
    end
end

json.set! :folders do
    json.array! @picture.folders, :id
end
