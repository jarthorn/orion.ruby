use Rack::Static, 
  :urls => ["/plugin.js", "rubyContentAssist.js", "rubyEditor.html", "rubyGrammar.js"],
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