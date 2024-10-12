/*
------------------------------------------------------Changelog------------------------------------------------------

Plan:
 • OGame but more scuffed (better imo)
    - Still space themed
    - more stuff can happen on a planet (ground combat, etc)
    - space is safer and harder to find stuff (more realistic and stops people from dying as much)
    - More combat and defense options, megastructures and superweapons
    - Different planet types with special properties, some of which can not be easily defended but have many resources
    - Enemy planets can be contested and taken over
    - Can build dyson spheres (very cool)
    - Fleet can do more stuff, park fleet in deep space, intercept enemy fleets, see moving fleets with probes 
       - info is given in 3d vectors so knowing math gives you an advantage

 • Resources
    Raw Materals         Processed Materials
    - Iron                  Alloy Plating
    - Rare Metals           ^
    - Copper                Electronics
    - Superconductors       ^
    - Liquid Fuel           Rocket Fuel
    - Deuterium             

 • Buildings
    Resource Production
    - Iron Mine
    - Copper Mine
    - Solar Farm
    - Oil Power Station
    - Fusion Reactor 
    - Farm (produce food for population)

    Unique Buildings
    - Oil Field (habitable planet, starting planet)
    - Deuterium Collector (water planet)
    - Geothermal Power Plant (lava planet) gives free energy, more efficient than solar
    - Orbital Collector (gas giant) gives deuterium and rocket fuel

    Facilities
    - Residential Building (store population, every n population gives an extra building slot)
    - Bunker (residence but protected)
    - Warehouse (stores resources of any type)
    - Vault (warehouse but protected)
    - Factory (convert raw materials into processed materials, build ships and defences)
    - Robotics Hub (increase construction speed)
    - Research Lab (unlock technology)
    - Testing Centre (lab but more complex, requires more than just resources to use)
    - Radio Telescope (scout other planets and space for movements)
    - Space Elevator (unlocks space buildings)
    - Hanger (store ground units for defence)

    Space Buildings
    - Space Station (provide fields for other space buildings)
    - Space Dock (allow ships to park around the planet, also allows some destroyed ships to be recovered)
    - Orbital Shipyard (allow building bigger ships and build them faster)
    - Orbital Defense Ring (allow placing defensive structures in space so they don't take up valauble ground space)
    - Atmospheric Shield Generator (upgradable shield dome that protects ground facilities from damage)
    - Orbital Super Laser (big ass laser that can help with defense or attack other planets or fleets. 
      Very long range and high damage)
    - Orbital Ion Cannon (big ass ion cannon that can help with defense or attack other planets or fleets. 
      Shorter range and moderate damage, but strips shield from all targets)
    - Orbital Mass Driver (big ass railgun that can help with defense or attack other planets or fleets.
      Infinite range but slow(ish) projectile and massive damage)

    Units
    - Attacking units can engage at different ranges (atmospheric (close), orbital (medium), deep space (long))
      at closer ranges, damage is increased, more types of defences can hit but the heavy orbital weapons can not, shield domes are bypassed
      at longer ranges, accuracy and damage from all weapons are reduced and some weapons can not fire
      defences on orbital defence ring can fire at all ranges
    - every shield dome built has 10% less shield per shield dome built of the same type

    Defences
    - Autocannon (close range)
    - Rocket Launcher (close and medium)
    - Light Laser (close and medium)
    - Heavy Laser (all ranges)
    - Ion Cannon (all ranges)
    - Particle Cannon (close)
    - Gauss Cannon (all ranges)
    - Plasma Cannon (all ranges)
    - Antimatter Cannon (medium and long)
    - Small Shield Dome 
    - Large Shield Dome

    Ground (planes)
    - Interceptor 
    - Bomber
    - Air Superiority Fighter
    - Heavy Bomber
    - Nuclear Bomber
    - Flying Fortress
    
    Combat Ships
    - Light Fighter
    - Heavy Fighter
    - Frigate
    - Cruiser
    - Battleship
    - Light Carrier
    - Battlecruiser
    - Bomber
    - Destroyer
    - Carrier
    - Reaper
    - Death Star

    Civilian Ships
    - Espionage Probe
    - Solar Satellite
    - Small Cargo
    - Recycler
    - Colony Ship
    - Large Cargo
    - Shielded Cargo Ship
    - Crawler
    - Pathfinder
    - Huge Cargo

    Galaxy and solar system
    - galaxy is 3d, solar systems at random position vectors
    - each system has n planets of random type
    - exploration is based on sending large numbers of probes to random positions and hoping to find something
    - inhabited planets do not appear different from empty ones unless there is recent activity or buildings
      constructed in orbit
    - any fleet action can be conducted on amy planet, just some will fail.

---------------------------------------------------------------------------------------------------------------------
*/

import * as Database from './database.js';

Database.store('testing', '0', 'Hello world!');
console.log(await Database.retrieve('testing', '0'));

console.error('ERROR: The operation completed successfully.');
