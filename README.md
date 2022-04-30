# desafio-ewally

# install project
  - npm install

# run tests
  - npm run test

# run development envirioment
  - npm run dev
  
# run production
  - npm start
 
 
# endpoints
  - test: http://localhost:3000/api/status
  
  - getData: http://localhost:3000/api/boleto/code
  
    - Example:
    http://localhost:3000/api/boleto/836800000033002300481005222180569212001836093839
    response: {
	    "barCode": "83680000003002300481002221805692100183609383",
	    "amount": "300.23"
    }
    
    - Example 2:
    http://localhost:3000/api/boleto/123
    response: {
	    "errors": [
		    {
			    "value": "123",
			    "msg": "Campo linhas digitáveis é inválido!",
			    "param": "code",
			    "location": "params"
		    }
	    ]
    }
  
