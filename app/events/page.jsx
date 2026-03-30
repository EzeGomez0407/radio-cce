import { Card, Chip } from "@heroui/react";
import { supabase } from "../../lib/supabase";

export default async function Events() {
  let errorMsg = "";
  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    errorMsg = "Hubo un error al cargar los datos";
  }
  console.log(events);

  return (
    <>
      {events.map((event) => (
        <Card
          key={event.id}
          className="relative w-full items-stretch md:flex-row"
        >
          <Chip color="warning" className="absolute top-3 right-3">
            {event.type}
          </Chip>
          <div className="overflow-hidden rounded-2xl h-[260px]">
            <img
              alt="Cherries"
              className="h-full w-full object-cover "
              loading="lazy"
              src="https://radio-cce.onrender.com/bg-welcome.jpg"
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
                  {event.data.hour}
                </span>
                <span className="text-xs text-muted">{event.data.day}</span>
              </div>
            </Card.Footer>
          </div>
        </Card>
      ))}
    </>
  );
}
