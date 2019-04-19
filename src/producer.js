const kafka = require('kafka-node');
const config = require('./config')
const Producer = kafka.Producer;
const Client = kafka.KafkaClient;

function producer(loop){
	let message = 1;
	try {
		const client = new Client({kafkaHost: config.kafka_server});
		const producer = new Producer(client);

		producer.on('ready', async function() {
			let body = {
				//input your body
			}
		

			let payloads = [{
				topic: config.kafka_topic,
				messages: JSON.stringify(body)
			}];

			for(let i=0;i<loop;i++){
				producer.send(payloads,(err,data) => {
					if(err){
						console.log('error',message)
					} else {
						console.log('success',message)
					}
				});
			}
		});

		producer.on('error', function(err){
			console.log('error' + err);
			throw err;
		});
	} catch(e){
		console.log('catch' + e);
	}
}

module.exports = producer;
