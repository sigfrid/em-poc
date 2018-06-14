module ApplicationHelper
  def embedded_svg(name)
   file = Rails.root.join('app', 'assets', 'images', name)
   File.read(file).html_safe
 end
end
