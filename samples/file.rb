# sample program that does some file manipulation

=begin
This is a block comment
=end

ARGV.each {|f|
puts f
counter = 0
file = File.open(f,"r")
   ftmp = f+".tmp"
   tmp = File.open(ftmp,"w")
   while line = file.gets
   if line =~ /pid="2"/
     counter += 1
     line = line.gsub(/pid="2"/,"pid=\"#{f}:#{counter}\"")
     puts line
   end
   tmp.print line
end
file.close
tmp.close
puts "renaming #{ftmp} to #{f}"
File.rename(ftmp,f)
}