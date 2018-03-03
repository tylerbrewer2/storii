class TestController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def create
    Story.create!(
      data_url: params[:storii],
      title: "Story title"
    )
  #   data = params[:data_uri]
  #   // remove all extras except data
  #   image_data = Base64.decode64(data['data:image/png;base64,'.length .. -1])

  #   File.open("#{Rails.root}/public/uploads/somefilename.png", 'wb') do |f|
  #     f.write image_data
  #   end
  end

  def show
    @story = Story.find(params[:id])
  end
end
