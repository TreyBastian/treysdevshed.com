# The recommended default Content Security Policy

BridgetownContentSecurityPolicy.configure :default do |policy|
  policy.default_src :self
  policy.img_src     :self, :data
  policy.object_src  :none
  policy.frame_src :self, 'www.youtube.com', 'youtube.com'
  policy.style_src :self, :unsafe_inline
end

# All other policies with inherit from :default
# To allow inline styles on certain pages, we can define the following
# policy which inherits all the values from :default and defines a style_src
#
# BridgetownContentSecurityPolicy.configure :allow_inline_styles do |policy|
#     policy.style_src   :self, :unsafe_inline
# end

# This is an example of a more complex policy demonstrating the DSL
# For further information see the following documentation
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

# BridgetownContentSecurityPolicy.configure :default do |policy|
#     policy.default_src :self
#     policy.font_src    :self, :https, :data
#     policy.img_src     :self, :https, :data
#     policy.object_src  :none
#     policy.script_src  :self, :https
#     policy.style_src   :self, :https
# end
