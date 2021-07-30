int LED = 13;
int led_status = 0;

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    led_status = Serial.read() - '0';

    if (led_status == 1)
      digitalWrite(LED, HIGH);
    else
      digitalWrite(LED, LOW);
  }

}
