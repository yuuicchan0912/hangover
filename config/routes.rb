Rails.application.routes.draw do
  get 'root/index'
  get 'top/index'

  get 'calendar/index'
  post 'calendar/insertSchedule'
  post 'calendar/updateSchedule'
  post 'calendar/deleteSchedule'
  get 'calendar/readSchedules/:year/:month' => 'calendar#readSchedules'
end
