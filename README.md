# README

        ActionCable.server.broadcast 'notifications', message: 'Hello World!'




## PG

### Manual

SELECT pg_notify('notifications', row_to_json(payload)::text) AS notify
FROM (SELECT 'hello world' AS message) payload;

### Trigger

CREATE OR REPLACE FUNCTION after_insert_on_samples() RETURNS TRIGGER AS $trigger$
BEGIN
  PERFORM pg_notify('notifications', row_to_json(NEW)::text);
  RETURN NEW;
END;
$trigger$ LANGUAGE plpgsql;


DROP TRIGGER notify_rails ON samples;

CREATE TRIGGER notify_rails
AFTER INSERT ON samples
FOR EACH ROW
EXECUTE PROCEDURE after_insert_on_samples();


#### To test

INSERT INTO samples (name, location, created_at, updated_at) 
VALUES ('sig', 'office', current_timestamp, current_timestamp);
