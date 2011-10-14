#Heroku app location: http://radiant-night-3911.heroku.com/
#Heroku Git location: git@heroku.com:radiant-night-3911.git

use Rack::Static, 
  :urls => ["/rubyEditor.html", "/plugin.js", "/rubyGrammar.js", "/rubyContentAssist.js"],
  :root => "public"
  
run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/index.html', File::RDONLY)
  ]
}