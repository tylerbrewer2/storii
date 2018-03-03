class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.text :data_url
      t.string :title

      t.timestamps
    end
  end
end
