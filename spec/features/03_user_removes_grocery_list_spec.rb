require "spec_helper"
require "pry"

feature "user remove grocery item", js: true do

  scenario "successfully remove grocery item" do
    visit "/groceries"
    fill_in "Name", with: "Peanut Butter"

    expect_no_page_reload do
      click_button "Add"
      click_button "delete"
      expect(page).to_not have_content "Peanut Butter"
    end

  end
end
