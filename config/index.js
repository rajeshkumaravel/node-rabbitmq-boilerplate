module.exports = {
  NODE_PORT: 3343,
  RBMQ: {
    SERVER: 'amqp://localhost',
    EXCHANGE: {
      C_VALIDATE_JSON: 'validateJSON',
      T_VALIDATE_JSON: 'topic_validateJSON'
    },
    ROUTING: {
      C_VALIDATE_JSON: 'validateJSON',
      T_VALIDATE_JSON: 'topic_validateJSON'
    },
    QUEUE: {
      T_VALIDATE_JSON: 'topic_validateJSON'
    }
  },
};
