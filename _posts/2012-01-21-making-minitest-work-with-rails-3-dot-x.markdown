---
layout: post
title: "Making Minitest Work With Rails 3.x"
date: 2012-01-21 21:28
comments: true
categories: rails, minitest
---

I have been helping with moving a fairly big legacy Rails code base from 2.3.x to 3.x, and one of the issues I had was to use minitest with rails controller specs. Initially to make this work with 2.3.x we were doing something like this in spec_helper.rb:

```ruby
ENV["RAILS_ENV"] = "test"
require File.expand_path(File.dirname(__FILE__) + "/../config/environment")
require 'test_help'
require 'minitest/autorun'

class MiniTest::Spec
  include ActionController::TestProcess
end
```

However, ActionController::TestProcess has been removed in Rails 3.x, and it's no longer so simple to get all the needed spec methods. After quite a bit of digging around, found the correct way to do this:

```ruby
ENV["RAILS_ENV"] = "test"
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/autorun'

class MiniTest::Unit::TestCase
  include ActiveSupport::Testing::SetupAndTeardown
  include ActionController::TestCase::Behavior
end
```

Hopefully this saves others a bit of time. One caveat though, I have tested this only on Rails 3.0.x, so no idea if this works with Rails 3.1.x. If it doesn't, you could also look at [minitest-rails](https://github.com/blowmage/minitest-rails).