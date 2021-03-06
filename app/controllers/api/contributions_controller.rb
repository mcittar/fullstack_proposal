class Api::ContributionsController < ApplicationController

  def create
    @contribution = Contribution.new(contribution_params)
    @project = Project.find(@contribution.reward.project_id)

    if @contribution.save
      render :show
    else
      render json: @contribution.errors.full_messages, status: 403
    end

  end

  private

  def contribution_params
    params.require(:contribution).permit(:amount, :backer_id, :reward_id)
  end
end
