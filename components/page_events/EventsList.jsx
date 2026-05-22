"use client";

import { Tabs } from "@heroui/react";
import { useEvents } from "../../lib/store";
import { Alert } from "@heroui/react";
import { Card } from "@heroui/react";
import { Chip } from "@heroui/react";

export function EventsList() {
  const weeklyEvents = useEvents(state => state.weeklyEvents);
  const specialEvents = useEvents(state => state.specialEvents);
    console.log(specialEvents);
    
  return (
    <>
      <Tabs.Panel className="pt-4" id="semanales">
        <List events={weeklyEvents} />
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="especiales">
        <List events={specialEvents} />
      </Tabs.Panel>
    </>
  );
}

export function List({ events }) {
    return (
      <section className="flex flex-col items-center gap-8">
        {!events || events.length === 0 ?  <Alert status="warning">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Aún no se cargan eventos.</Alert.Title>
          </Alert.Content>
        </Alert> : events.map((event) => (
          <Card
            key={event.id}
            className="relative w-full items-stretch md:flex-row"
          >
            <Chip color={event.type == "especial" ? "success" : "warning"} className="absolute top-3 right-3 text-lg">
              {event.type}
            </Chip>
            <div className="overflow-hidden rounded-2xl h-65">
              <img
                alt="Cherries"
                className="h-full w-full object-cover "
                loading="lazy"
                src={
                  event.data.image
                    ? event.data.image
                    : "https://radio-cce.onrender.com/bg-welcome.jpg"
                }
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <Card.Header className="gap-1">
                <Card.Title className="pr-15 text-2xl">
                  {event.data.title}
                </Card.Title>
                <Card.Description>{event.data.description}</Card.Description>
              </Card.Header>
              <Card.Footer className=" flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    Horario: {event.data.time ? event.data.time : "--"}
                  </span>
                  <span className="text-xs text-muted">Fecha: {event.data.date ? event.data.date : "--"}</span>
                </div>
              </Card.Footer>
            </div>
          </Card>
        ))}
      </section>
    );
  }
