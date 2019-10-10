@pictureToFolder.each do |join|
    json.set! join.id do 
        json.extract! join, :id, :picture_id, :folder_id
    end
end

