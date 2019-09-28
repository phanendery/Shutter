@folders.each do |folder|
    json.set! folder.id do
        json.extract! folder, :id, :name, :user_id
    end  
end