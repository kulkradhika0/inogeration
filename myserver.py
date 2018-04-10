import BaseHTTPServer
import SimpleHTTPServer
import subprocess

class RequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):

	def do_POST(self):

		f = self.send_head()
		if f:
			try:
				self.copyfile(f, self.wfile)
				print ('POST request accepted')
			finally:
				f.close()

httpd = BaseHTTPServer.HTTPServer(('', 8200), RequestHandler)

httpd.serve_forever()


