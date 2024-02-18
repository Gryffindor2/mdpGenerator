var mdpTemplates = [
      {"name":"EM",
      "temp":
`integrator=md
nsteps=10000
cutoff-scheme=Verlet
coulombtype=PME
rcoulomb=1.2
rvdw=1.2
fourierspacing=0.15
`
      },
      {
        "name":"EM",
        "temp":
`integrator=steep
nsteps=-1
emtol=1000.0
cutoff-scheme=Verlet
coulombtype=PME
rcoulomb=1.2
rvdw=1.2
fourierspacing=0.15
nstenergy=500`
      },
      {
        "name":"NVT",
        "temp":
`define=-DPOSRES
integrator=md
dt=0.002
nsteps=50000
gen-temp=300
gen-vel=yes
cutoff-scheme=Verlet
coulombtype=PME
rcoulomb=1.2
rvdw=1.2
rvdw-switch=1.0
vdw-modifier=Force-switch
fourierspacing=0.15
constraints=h-bonds
tcoupl=v-rescale
tc-grps=system
tau-t=1.0
ref-t=300
pcoupl=no
nstenergy=500
`
      },
      {
        "name":"NPT",
        "temp":
`define=-DPOSRES
integrator=md
dt=0.002
nsteps=50000
cutoff-scheme=Verlet
coulombtype=PME
rcoulomb=1.2
rvdw=1.2
rvdw-switch=1.0
vdw-modifier=Force-switch
fourierspacing=0.15
constraints=h-bonds
continuation=yes
tcoupl=v-rescale
tc-grps=system
tau-t=1.0
ref-t=300
pcoupl=C-rescale
pcoupltype=isotropic
tau-p=5.0
compressibility=4.5e-5
ref-p=1.0
refcoord-scaling=com
nstenergy=500

`
      },
      {
            "name":"PULL",
            "temp":
`pull=yes
pull-ngroups=2
pull-group1-name=group1
pull-coord1-geometry=distance
pull-coord1-groups=1 2
pull-group2-name=group2
pull-coord1-type=umbrella
pull-coord1-k=5000.0
pull-coord1-rate=0.0
pull-coord1-init=0.834

`
      },
      {
            "name":"PRODUCTION MD",
            "temp":
`integrator=md
dt=0.002
nsteps=500000
coulombtype=PME
rcoulomb=1.2
rvdw=1.2
rvdw-switch=1.0
vdw-modifier=Force-switch
fourierspacing=0.15
constraints=h-bonds
continuation=yes
tcoupl=v-rescale
tc-grps=system
tau-t=1.0
ref-t=300
pcoupl=Parrinello-Rahman
pcoupltype=isotropic
tau-p=5.0
compressibility=4.5e-5
ref-p=1.0
refcoord-scaling=com
nstenergy=500
nstxout-compressed=2500`
      }
]

export default mdpTemplates;