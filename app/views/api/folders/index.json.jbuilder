@folders.each do |folder|
    json.set! folder.id do
        json.extract! folder, :id, :name, :user_id
        json.folderFirstPicture folder.pictures.first ? url_for(folder.pictures.first.photo) : asset_path("default.jpg")
        
    end  
  
end

