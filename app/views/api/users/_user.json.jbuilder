json.extract! user, :id, :username
p user.avatar.attached?
p "!!!!!!!!!!!!!!!!!"
if user.avatar.attached?
  json.avatar url_for(user.avatar)
end