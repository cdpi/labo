import http.server
import ssl

address = ('0.0.0.0', 4443)

cert = './localhost+4.pem'
key = './localhost+4-key.pem'

httpd = http.server.HTTPServer(address, http.server.SimpleHTTPRequestHandler)

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(cert, key)

httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

httpd.serve_forever()
