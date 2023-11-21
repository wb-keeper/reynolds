import Image from "next/image";

function EventBox({ events }) {
  return (
    <div className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative">
      <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
        <div className="hidden xl:flex w-[400px]">
          <Image
            src={"/assets/events/singer.png"}
            alt="singer"
            width={358}
            height={489}
            priority
            quality={100}
          />
        </div>
        <div className="flex-1 bg-purple-400/10 h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent">
          {events.map((event) => {
            return (
              <div key={event.id}>
                <div>
                  <div className="flex flex-col justify-between items-center leading-tight w-[80px] mb-4 xl:mb-0">
                    <div>{event.date.day}</div>
                    <div>{event.date.month}</div>
                  </div>
                  <div>
                    <div>{`${event.location.city}, ${event.location.country}`}</div>
                    <div>
                      <div>location icon</div>
                      <div>{event.location.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EventBox;
